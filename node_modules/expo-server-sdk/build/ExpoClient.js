"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * expo-server-sdk
 *
 * Use this if you are running Node on your server backend when you are working with Expo
 * https://expo.io
 */
const assert = require("assert");
const node_fetch_1 = require("node-fetch");
const promiseLimit = require("promise-limit");
const zlib = require("zlib");
const BASE_URL = 'https://exp.host';
const BASE_API_URL = `${BASE_URL}/--/api/v2`;
/**
 * The max number of push notifications to be sent at once. Since we can't automatically upgrade
 * everyone using this library, we should strongly try not to decrease it.
 */
const PUSH_NOTIFICATION_CHUNK_LIMIT = 100;
/**
 * The max number of push notification receipts to request at once.
 */
const PUSH_NOTIFICATION_RECEIPT_CHUNK_LIMIT = 300;
/**
 * The default max number of concurrent HTTP requests to send at once and spread out the load,
 * increasing the reliability of notification delivery.
 */
const DEFAULT_CONCURRENT_REQUEST_LIMIT = 6;
// TODO: Eventually we'll want to have developers authenticate. Right now it's not necessary because
// push notifications are the only API we have and the push tokens are secret anyway.
class Expo {
    constructor(options = {}) {
        this._httpAgent = options.httpAgent;
        this._limitConcurrentRequests = promiseLimit(options.maxConcurrentRequests != null
            ? options.maxConcurrentRequests
            : DEFAULT_CONCURRENT_REQUEST_LIMIT);
    }
    /**
     * Returns `true` if the token is an Expo push token
     */
    static isExpoPushToken(token) {
        return (typeof token === 'string' &&
            (((token.startsWith('ExponentPushToken[') || token.startsWith('ExpoPushToken[')) &&
                token.endsWith(']')) ||
                /^[a-z\d]{8}-[a-z\d]{4}-[a-z\d]{4}-[a-z\d]{4}-[a-z\d]{12}$/i.test(token)));
    }
    /**
     * Sends the given messages to their recipients via push notifications and returns an array of
     * push tickets. Each ticket corresponds to the message at its respective index (the nth receipt
     * is for the nth message) and contains a receipt ID. Later, after Expo attempts to deliver the
     * messages to the underlying push notification services, the receipts with those IDs will be
     * available for a period of time (approximately a day).
     *
     * There is a limit on the number of push notifications you can send at once. Use
     * `chunkPushNotifications` to divide an array of push notification messages into appropriately
     * sized chunks.
     */
    sendPushNotificationsAsync(messages) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield this._requestAsync(`${BASE_API_URL}/push/send`, {
                httpMethod: 'post',
                body: messages,
                shouldCompress(body) {
                    return body.length > 1024;
                },
            });
            if (!Array.isArray(data) || data.length !== messages.length) {
                let apiError = new Error(`Expected Expo to respond with ${messages.length} ${messages.length === 1
                    ? 'ticket'
                    : 'tickets'} but got ${data.length}`);
                apiError.data = data;
                throw apiError;
            }
            return data;
        });
    }
    getPushNotificationReceiptsAsync(receiptIds) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield this._requestAsync(`${BASE_API_URL}/push/getReceipts`, {
                httpMethod: 'post',
                body: { ids: receiptIds },
                shouldCompress(body) {
                    return body.length > 1024;
                },
            });
            if (!data || typeof data !== 'object' || Array.isArray(data)) {
                let apiError = new Error(`Expected Expo to respond with a map from receipt IDs to receipts but received data of another type`);
                apiError.data = data;
                throw apiError;
            }
            return data;
        });
    }
    chunkPushNotifications(messages) {
        return this._chunkItems(messages, PUSH_NOTIFICATION_CHUNK_LIMIT);
    }
    chunkPushNotificationReceiptIds(receiptIds) {
        return this._chunkItems(receiptIds, PUSH_NOTIFICATION_RECEIPT_CHUNK_LIMIT);
    }
    _chunkItems(items, chunkSize) {
        let chunks = [];
        let chunk = [];
        for (let item of items) {
            chunk.push(item);
            if (chunk.length >= chunkSize) {
                chunks.push(chunk);
                chunk = [];
            }
        }
        if (chunk.length) {
            chunks.push(chunk);
        }
        return chunks;
    }
    _requestAsync(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let requestBody;
            let sdkVersion = require('../package.json').version;
            let requestHeaders = new node_fetch_1.Headers({
                Accept: 'application/json',
                'Accept-Encoding': 'gzip, deflate',
                'User-Agent': `expo-server-sdk-node/${sdkVersion}`,
            });
            if (options.body != null) {
                let json = JSON.stringify(options.body);
                assert(json != null, `JSON request body must not be null`);
                if (options.shouldCompress(json)) {
                    requestBody = yield _gzipAsync(Buffer.from(json));
                    requestHeaders.set('Content-Encoding', 'gzip');
                }
                else {
                    requestBody = json;
                }
                requestHeaders.set('Content-Type', 'application/json');
            }
            let response = yield this._limitConcurrentRequests(() => node_fetch_1.default(url, {
                method: options.httpMethod,
                body: requestBody,
                headers: requestHeaders,
                agent: this._httpAgent,
            }));
            if (response.status !== 200) {
                let apiError = yield this._parseErrorResponseAsync(response);
                throw apiError;
            }
            let textBody = yield response.text();
            // We expect the API response body to be JSON
            let result;
            try {
                result = JSON.parse(textBody);
            }
            catch (e) {
                let apiError = yield this._getTextResponseErrorAsync(response, textBody);
                throw apiError;
            }
            if (result.errors) {
                let apiError = this._getErrorFromResult(result);
                throw apiError;
            }
            return result.data;
        });
    }
    _parseErrorResponseAsync(response) {
        return __awaiter(this, void 0, void 0, function* () {
            let textBody = yield response.text();
            let result;
            try {
                result = JSON.parse(textBody);
            }
            catch (e) {
                return yield this._getTextResponseErrorAsync(response, textBody);
            }
            if (!result.errors || !Array.isArray(result.errors) || !result.errors.length) {
                let apiError = yield this._getTextResponseErrorAsync(response, textBody);
                apiError.errorData = result;
                return apiError;
            }
            return this._getErrorFromResult(result);
        });
    }
    _getTextResponseErrorAsync(response, text) {
        return __awaiter(this, void 0, void 0, function* () {
            let apiError = new Error(`Expo responded with an error with status code ${response.status}: ` + text);
            apiError.statusCode = response.status;
            apiError.errorText = text;
            return apiError;
        });
    }
    /**
     * Returns an error for the first API error in the result, with an optional `others` field that
     * contains any other errors.
     */
    _getErrorFromResult(result) {
        assert(result.errors && result.errors.length > 0, `Expected at least one error from Expo`);
        let [errorData, ...otherErrorData] = result.errors;
        let error = this._getErrorFromResultError(errorData);
        if (otherErrorData.length) {
            error.others = otherErrorData.map(data => this._getErrorFromResultError(data));
        }
        return error;
    }
    /**
     * Returns an error for a single API error
     */
    _getErrorFromResultError(errorData) {
        let error = new Error(errorData.message);
        error.code = errorData.code;
        if (errorData.details != null) {
            error.details = errorData.details;
        }
        if (errorData.stack != null) {
            error.serverStack = errorData.stack;
        }
        return error;
    }
}
Expo.pushNotificationChunkSizeLimit = PUSH_NOTIFICATION_CHUNK_LIMIT;
Expo.pushNotificationReceiptChunkSizeLimit = PUSH_NOTIFICATION_RECEIPT_CHUNK_LIMIT;
exports.Expo = Expo;
exports.default = Expo;
function _gzipAsync(data) {
    return new Promise((resolve, reject) => {
        zlib.gzip(data, (error, result) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
}
class ExtensibleError extends Error {
}
//# sourceMappingURL=ExpoClient.js.map
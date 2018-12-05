"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@sentry/core");
var async_1 = require("@sentry/utils/async");
var logger_1 = require("@sentry/utils/logger");
var object_1 = require("@sentry/utils/object");
var cookie = require("cookie");
var domain = require("domain");
var os = require("os");
var url = require("url");
var DEFAULT_SHUTDOWN_TIMEOUT = 2000;
/** JSDoc */
function extractTransaction(req, type) {
    try {
        // Express.js shape
        var request = req;
        switch (type) {
            case 'path': {
                return request.route.path;
            }
            case 'handler': {
                return request.route.stack[0].name;
            }
            case 'methodPath':
            default: {
                var method = request.method.toUpperCase();
                var path = request.route.path;
                return method + "|" + path;
            }
        }
    }
    catch (_oO) {
        return undefined;
    }
}
/** JSDoc */
function extractRequestData(req) {
    // headers:
    //   node, express: req.headers
    //   koa: req.header
    var headers = (req.headers || req.header || {});
    // method:
    //   node, express, koa: req.method
    var method = req.method;
    // host:
    //   express: req.hostname in > 4 and req.host in < 4
    //   koa: req.host
    //   node: req.headers.host
    var host = req.hostname || req.host || headers.host || '<no host>';
    // protocol:
    //   node: <n/a>
    //   express, koa: req.protocol
    var protocol = req.protocol === 'https' || req.secure || (req.socket || {}).encrypted
        ? 'https'
        : 'http';
    // url (including path and query string):
    //   node, express: req.originalUrl
    //   koa: req.url
    var originalUrl = (req.originalUrl || req.url);
    // absolute url
    var absoluteUrl = protocol + "://" + host + originalUrl;
    // query string:
    //   node: req.url (raw)
    //   express, koa: req.query
    var query = url.parse(originalUrl || '', false).query;
    // cookies:
    //   node, express, koa: req.headers.cookie
    var cookies = cookie.parse(headers.cookie || '');
    // body data:
    //   node, express, koa: req.body
    var data = req.body;
    if (method === 'GET' || method === 'HEAD') {
        if (typeof data === 'undefined') {
            data = '<unavailable>';
        }
    }
    if (data && typeof data !== 'string' && {}.toString.call(data) !== '[object String]') {
        // Make sure the request body is a string
        data = object_1.serialize(data);
    }
    // request interface
    var request = {
        cookies: cookies,
        data: data,
        headers: headers,
        method: method,
        query_string: query,
        url: absoluteUrl,
    };
    return request;
}
/** Default user keys that'll be used to extract data from the request */
var DEFAULT_USER_KEYS = ['id', 'username', 'email'];
/** JSDoc */
function extractUserData(req, keys) {
    var user = {};
    var attributes = Array.isArray(keys) ? keys : DEFAULT_USER_KEYS;
    attributes.forEach(function (key) {
        if ({}.hasOwnProperty.call(req.user, key)) {
            user[key] = req.user[key];
        }
    });
    // client ip:
    //   node: req.connection.remoteAddress
    //   express, koa: req.ip
    var ip = req.ip ||
        (req.connection &&
            req.connection.remoteAddress);
    if (ip) {
        user.ip_address = ip;
    }
    return user;
}
/**
 * Enriches passed event with request data.
 *
 *
 * @param event Will be mutated and enriched with req data
 * @param req Request object
 * @param options object containing flags to enable functionality
 */
function parseRequest(event, req, options) {
    // tslint:disable-next-line:no-parameter-reassignment
    options = tslib_1.__assign({ request: true, serverName: true, transaction: true, user: true, version: true }, options);
    if (options.version) {
        event.extra = tslib_1.__assign({}, event.extra, { node: global.process.version });
    }
    if (options.request) {
        event.request = tslib_1.__assign({}, event.request, extractRequestData(req));
    }
    if (options.serverName) {
        event.server_name = global.process.env.SENTRY_NAME || os.hostname();
    }
    if (options.user && req.user) {
        event.user = tslib_1.__assign({}, event.user, extractUserData(req, options.user));
    }
    if (options.transaction) {
        var transaction = extractTransaction(req, options.transaction);
        if (transaction) {
            event.transaction = transaction;
        }
    }
    return event;
}
exports.parseRequest = parseRequest;
/** JSDoc */
function requestHandler(options) {
    return function sentryRequestMiddleware(req, res, next) {
        var _this = this;
        var local = domain.create();
        local.add(req);
        local.add(res);
        local.on('error', next);
        local.run(function () {
            core_1.getCurrentHub().configureScope(function (scope) {
                return scope.addEventProcessor(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, parseRequest(event, req, options)];
                }); }); });
            });
            next();
        });
    };
}
exports.requestHandler = requestHandler;
/** JSDoc */
function getStatusCodeFromResponse(error) {
    var statusCode = error.status || error.statusCode || error.status_code || (error.output && error.output.statusCode);
    return statusCode ? parseInt(statusCode, 10) : 500;
}
/** JSDoc */
function errorHandler() {
    return function sentryErrorMiddleware(error, _req, _res, next) {
        var status = getStatusCodeFromResponse(error);
        if (status < 500) {
            next(error);
            return;
        }
        core_1.captureException(error);
        next(error);
    };
}
exports.errorHandler = errorHandler;
/** JSDoc */
function defaultOnFatalError(error) {
    console.error(error && error.stack ? error.stack : error);
    var options = core_1.getCurrentHub().getClient().getOptions();
    var timeout = (options && options.shutdownTimeout && options.shutdownTimeout > 0 && options.shutdownTimeout) ||
        DEFAULT_SHUTDOWN_TIMEOUT;
    async_1.forget(core_1.getCurrentHub().getClient().close(timeout).then(function (result) {
        if (!result) {
            logger_1.logger.warn('We reached the timeout for emptying the request buffer, still exiting now!');
        }
        global.process.exit(1);
    }));
}
exports.defaultOnFatalError = defaultOnFatalError;
//# sourceMappingURL=handlers.js.map
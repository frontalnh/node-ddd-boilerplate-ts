"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@sentry/core");
var types_1 = require("@sentry/types");
var is_1 = require("@sentry/utils/is");
var object_1 = require("@sentry/utils/object");
var crypto_1 = require("crypto");
var parsers_1 = require("./parsers");
var transports_1 = require("./transports");
/** The Sentry Node SDK Backend. */
var NodeBackend = /** @class */ (function (_super) {
    tslib_1.__extends(NodeBackend, _super);
    function NodeBackend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    NodeBackend.prototype.eventFromException = function (exception, hint) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ex, keys_1, message, event;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ex = exception;
                        if (!is_1.isError(exception)) {
                            if (is_1.isPlainObject(exception)) {
                                keys_1 = Object.keys(exception).sort();
                                message = "Non-Error exception captured with keys: " + object_1.serializeKeysToEventMessage(keys_1);
                                core_1.getCurrentHub().configureScope(function (scope) {
                                    scope.setExtra('__serialized__', object_1.limitObjectDepthToSize(exception));
                                    scope.setFingerprint([
                                        crypto_1.createHash('md5')
                                            .update(keys_1.join(''))
                                            .digest('hex'),
                                    ]);
                                });
                                ex = (hint && hint.syntheticException) || new Error(message);
                                ex.message = message;
                            }
                            else {
                                // This handles when someone does: `throw "something awesome";`
                                // We use synthesized Error here so we can extract a (rough) stack trace.
                                ex = (hint && hint.syntheticException) || new Error(exception);
                            }
                        }
                        return [4 /*yield*/, parsers_1.parseError(ex)];
                    case 1:
                        event = _a.sent();
                        return [2 /*return*/, tslib_1.__assign({}, event, { event_id: hint && hint.event_id })];
                }
            });
        });
    };
    /**
     * @inheritDoc
     */
    NodeBackend.prototype.eventFromMessage = function (message, level, hint) {
        if (level === void 0) { level = types_1.Severity.Info; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var event, stack, _a, frames_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        event = {
                            event_id: hint && hint.event_id,
                            level: level,
                            message: message,
                        };
                        if (!(this.options.attachStacktrace && hint && hint.syntheticException)) return [3 /*break*/, 5];
                        if (!hint.syntheticException) return [3 /*break*/, 2];
                        return [4 /*yield*/, parsers_1.extractStackFromError(hint.syntheticException)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = [];
                        _b.label = 3;
                    case 3:
                        stack = _a;
                        return [4 /*yield*/, parsers_1.parseStack(stack)];
                    case 4:
                        frames_1 = _b.sent();
                        event.stacktrace = {
                            frames: parsers_1.prepareFramesForEvent(frames_1),
                        };
                        _b.label = 5;
                    case 5: return [2 /*return*/, event];
                }
            });
        });
    };
    /**
     * @inheritDoc
     */
    NodeBackend.prototype.sendEvent = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, dsn, transportOptions, clientOptions, clientOptions_1, clientOptions_1_1, option;
            return tslib_1.__generator(this, function (_b) {
                if (!this.options.dsn) {
                    throw new core_1.SentryError('Cannot sendEvent without a valid DSN');
                }
                else {
                    dsn = new core_1.Dsn(this.options.dsn);
                }
                if (!this.transport) {
                    transportOptions = this.options.transportOptions ? this.options.transportOptions : { dsn: dsn };
                    clientOptions = ['httpProxy', 'httpsProxy', 'caCerts'];
                    try {
                        for (clientOptions_1 = tslib_1.__values(clientOptions), clientOptions_1_1 = clientOptions_1.next(); !clientOptions_1_1.done; clientOptions_1_1 = clientOptions_1.next()) {
                            option = clientOptions_1_1.value;
                            if (this.options[option]) {
                                transportOptions[option] = transportOptions[option] || this.options[option];
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (clientOptions_1_1 && !clientOptions_1_1.done && (_a = clientOptions_1.return)) _a.call(clientOptions_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    this.transport = this.options.transport
                        ? new this.options.transport({ dsn: dsn })
                        : dsn.protocol === 'http'
                            ? new transports_1.HTTPTransport(transportOptions)
                            : new transports_1.HTTPSTransport(transportOptions);
                }
                return [2 /*return*/, this.transport.captureEvent(event)];
            });
        });
    };
    return NodeBackend;
}(core_1.BaseBackend));
exports.NodeBackend = NodeBackend;
//# sourceMappingURL=backend.js.map
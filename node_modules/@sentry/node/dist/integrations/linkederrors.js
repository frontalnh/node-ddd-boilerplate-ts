"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@sentry/core");
var parsers_1 = require("../parsers");
var DEFAULT_KEY = 'cause';
var DEFAULT_LIMIT = 5;
/** Adds SDK info to an event. */
var LinkedErrors = /** @class */ (function () {
    /**
     * @inheritDoc
     */
    function LinkedErrors(options) {
        if (options === void 0) { options = {}; }
        /**
         * @inheritDoc
         */
        this.name = LinkedErrors.id;
        this.key = options.key || DEFAULT_KEY;
        this.limit = options.limit || DEFAULT_LIMIT;
    }
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype.setupOnce = function () {
        var _this = this;
        core_1.addGlobalEventProcessor(function (event, hint) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var self;
            return tslib_1.__generator(this, function (_a) {
                self = core_1.getCurrentHub().getIntegration(LinkedErrors);
                if (self) {
                    return [2 /*return*/, self.handler(event, hint)];
                }
                return [2 /*return*/, event];
            });
        }); });
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype.handler = function (event, hint) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var linkedErrors;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!event.exception || !event.exception.values || !hint || !(hint.originalException instanceof Error)) {
                            return [2 /*return*/, event];
                        }
                        return [4 /*yield*/, this.walkErrorTree(hint.originalException, this.key)];
                    case 1:
                        linkedErrors = _a.sent();
                        event.exception.values = tslib_1.__spread(linkedErrors, event.exception.values);
                        return [2 /*return*/, event];
                }
            });
        });
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.prototype.walkErrorTree = function (error, key, stack) {
        if (stack === void 0) { stack = []; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var exception;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(error[key] instanceof Error) || stack.length + 1 >= this.limit) {
                            return [2 /*return*/, stack];
                        }
                        return [4 /*yield*/, parsers_1.getExceptionFromError(error[key])];
                    case 1:
                        exception = _a.sent();
                        return [2 /*return*/, this.walkErrorTree(error[key], key, tslib_1.__spread([exception], stack))];
                }
            });
        });
    };
    /**
     * @inheritDoc
     */
    LinkedErrors.id = 'LinkedErrors';
    return LinkedErrors;
}());
exports.LinkedErrors = LinkedErrors;
//# sourceMappingURL=linkederrors.js.map
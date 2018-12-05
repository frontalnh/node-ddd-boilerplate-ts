"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@sentry/core");
/** Add node transaction to the event */
var Transaction = /** @class */ (function () {
    function Transaction() {
        /**
         * @inheritDoc
         */
        this.name = Transaction.id;
    }
    /**
     * @inheritDoc
     */
    Transaction.prototype.setupOnce = function () {
        var _this = this;
        core_1.addGlobalEventProcessor(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var self;
            return tslib_1.__generator(this, function (_a) {
                self = core_1.getCurrentHub().getIntegration(Transaction);
                if (self) {
                    return [2 /*return*/, self.process(event)];
                }
                return [2 /*return*/, event];
            });
        }); });
    };
    /**
     * @inheritDoc
     */
    Transaction.prototype.process = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var frames, i, frame;
            return tslib_1.__generator(this, function (_a) {
                frames = this.getFramesFromEvent(event);
                // use for loop so we don't have to reverse whole frames array
                for (i = frames.length - 1; i >= 0; i--) {
                    frame = frames[i];
                    if (frame.in_app === true) {
                        event.transaction = this.getTransaction(frame);
                        break;
                    }
                }
                return [2 /*return*/, event];
            });
        });
    };
    /** JSDoc */
    Transaction.prototype.getFramesFromEvent = function (event) {
        var exception = event.exception && event.exception.values && event.exception.values[0];
        return (exception && exception.stacktrace && exception.stacktrace.frames) || [];
    };
    /** JSDoc */
    Transaction.prototype.getTransaction = function (frame) {
        return frame.module || frame.function ? (frame.module || '?') + "/" + (frame.function || '?') : '<unknown>';
    };
    /**
     * @inheritDoc
     */
    Transaction.id = 'Transaction';
    return Transaction;
}());
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map
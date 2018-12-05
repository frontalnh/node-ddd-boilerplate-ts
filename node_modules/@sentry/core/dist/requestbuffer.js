"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** A simple queue that holds promises. */
var RequestBuffer = /** @class */ (function () {
    function RequestBuffer() {
        /** Internal set of queued Promises */
        this.buffer = [];
    }
    /**
     * Add a promise to the queue.
     *
     * @param task Can be any Promise<T>
     * @returns The original promise.
     */
    RequestBuffer.prototype.add = function (task) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (this.buffer.indexOf(task) === -1) {
                    this.buffer.push(task);
                }
                task.then(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, this.remove(task)];
                }); }); }).catch(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                    return [2 /*return*/, this.remove(task)];
                }); }); });
                return [2 /*return*/, task];
            });
        });
    };
    /**
     * Remove a promise to the queue.
     *
     * @param task Can be any Promise<T>
     * @returns Removed promise.
     */
    RequestBuffer.prototype.remove = function (task) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var removedTask;
            return tslib_1.__generator(this, function (_a) {
                removedTask = this.buffer.splice(this.buffer.indexOf(task), 1)[0];
                return [2 /*return*/, removedTask];
            });
        });
    };
    /**
     * This function returns the number of unresolved promises in the queue.
     */
    RequestBuffer.prototype.length = function () {
        return this.buffer.length;
    };
    /**
     * This will drain the whole queue, returns true if queue is empty or drained.
     * If timeout is provided and the queue takes longer to drain, the promise still resolves but with false.
     *
     * @param timeout Number in ms to wait until it resolves with false.
     */
    RequestBuffer.prototype.drain = function (timeout) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var capturedSetTimeout = setTimeout(function () {
                            if (timeout && timeout > 0) {
                                resolve(false);
                            }
                        }, timeout);
                        Promise.all(_this.buffer)
                            .then(function () {
                            clearTimeout(capturedSetTimeout);
                            resolve(true);
                        })
                            .catch(function () {
                            resolve(true);
                        });
                    })];
            });
        });
    };
    return RequestBuffer;
}());
exports.RequestBuffer = RequestBuffer;
//# sourceMappingURL=requestbuffer.js.map
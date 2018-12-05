"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@sentry/core");
var lsmod = require("lsmod");
var moduleCache;
/** Add node modules / packages to the event */
var Modules = /** @class */ (function () {
    function Modules() {
        /**
         * @inheritDoc
         */
        this.name = Modules.id;
    }
    /**
     * @inheritDoc
     */
    Modules.prototype.setupOnce = function () {
        var _this = this;
        core_1.addGlobalEventProcessor(function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!core_1.getCurrentHub().getIntegration(Modules)) {
                    return [2 /*return*/, event];
                }
                return [2 /*return*/, tslib_1.__assign({}, event, { modules: this.getModules() })];
            });
        }); });
    };
    /** Fetches the list of modules and the versions loaded by the entry file for your node.js app. */
    Modules.prototype.getModules = function () {
        if (!moduleCache) {
            // tslint:disable-next-line:no-unsafe-any
            moduleCache = lsmod();
        }
        return moduleCache;
    };
    /**
     * @inheritDoc
     */
    Modules.id = 'Modules';
    return Modules;
}());
exports.Modules = Modules;
//# sourceMappingURL=modules.js.map
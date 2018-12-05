"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@sentry/core");
var https = require("https");
var HttpsProxyAgent = require("https-proxy-agent");
var base_1 = require("./base");
/** Node https module transport */
var HTTPSTransport = /** @class */ (function (_super) {
    tslib_1.__extends(HTTPSTransport, _super);
    /** Create a new instance and set this.agent */
    function HTTPSTransport(options) {
        var _this = _super.call(this, options) || this;
        _this.options = options;
        _this.module = https;
        var proxy = options.httpsProxy || options.httpProxy || process.env.https_proxy || process.env.http_proxy;
        _this.client = proxy
            ? // tslint:disable-next-line:no-unsafe-any
                new HttpsProxyAgent(proxy)
            : new https.Agent({ keepAlive: true, maxSockets: 100 });
        return _this;
    }
    /**
     * @inheritDoc
     */
    HTTPSTransport.prototype.captureEvent = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!this.module) {
                    throw new core_1.SentryError('No module available in HTTPSTransport');
                }
                return [2 /*return*/, this.sendWithModule(this.module, event)];
            });
        });
    };
    return HTTPSTransport;
}(base_1.BaseTransport));
exports.HTTPSTransport = HTTPSTransport;
//# sourceMappingURL=https.js.map
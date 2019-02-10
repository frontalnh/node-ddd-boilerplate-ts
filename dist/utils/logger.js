"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const loggersCache = {};
let level = 'debug';
if (process.env.NODE_ENV !== 'development') {
    level = 'info';
}
const myFormat = winston_1.format.printf(its => `${its.timestamp} [${its.label}] ${its.level}: ${its.message}`);
const defaultTransports = [
    new winston_1.transports.Console(),
    new winston_1.transports.File({ filename: 'logs/error.log', level: 'error' })
];
function loggerConf(myLabel = 'DEFAULT logger') {
    return {
        level,
        // colorize: true,
        format: winston_1.format.combine(winston_1.format.label({ label: myLabel }), winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.splat(), myFormat),
        transports: defaultTransports
    };
}
exports.logger = winston_1.createLogger(loggerConf());
module.exports = {
    logger: exports.logger,
    getLogger(label) {
        if (!label) {
            return exports.logger;
        }
        const logr = loggersCache[label] ||
            (loggersCache[label] = winston_1.createLogger(loggerConf(label)));
        return logr;
    }
};
//# sourceMappingURL=logger.js.map
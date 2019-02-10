"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerSetter = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};
//# sourceMappingURL=headerSetter.js.map
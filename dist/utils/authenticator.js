"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const bcrypt = __importStar(require("bcryptjs"));
const Constants_1 = require("@common/Constants");
exports.encodeJwt = (data, expTime) => {
    let expiresIn = 24 * 360000000;
    if (expTime)
        expiresIn = expTime;
    const jwtToken = jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn });
    // session save logic;;
    return jwtToken;
};
exports.decodeJwt = token => {
    console.log(token);
    var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return decoded;
};
exports.encrypt = password => {
    const salt = bcrypt.genSaltSync(Constants_1.Constants.BCRYPT.SALT_WORK_FACTOR);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
};
//# sourceMappingURL=authenticator.js.map
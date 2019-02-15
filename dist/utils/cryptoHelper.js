"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("@common/Constants");
const bcrypt = __importStar(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
class CryptoHelper {
    encodeJwt(data, expTime) {
        let expiresIn = 24 * 360000000;
        if (expTime)
            expiresIn = expTime;
        const jwtToken = jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn });
        // session save logic;;
        return jwtToken;
    }
    decodeJwt(token) {
        let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return decoded;
    }
    encrypt(password) {
        const salt = bcrypt.genSaltSync(Constants_1.Constants.BCRYPT.SALT_WORK_FACTOR);
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    }
}
exports.cryptoHelper = new CryptoHelper();
//# sourceMappingURL=cryptoHelper.js.map
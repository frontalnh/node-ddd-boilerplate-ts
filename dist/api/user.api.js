"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpErrCode_1 = require("@common/constants/HttpErrCode");
const CustomError_1 = require("@common/models/CustomError");
const user_model_1 = require("@domain/user/user.model");
const cryptoHelper_1 = require("@utils/cryptoHelper");
class UserApi {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.userRepository = userRepository;
    }
    register(email, name, password, phone, birthday) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield this.userRepository.findAll({
                where: { email, status: user_model_1.UserStatus.ACTIVE }
            });
            if (users.length !== 0)
                throw new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.REGISTER.EXIST_EMAIL, '이미 존재하는 이메일입니다.');
            users = yield this.userRepository.findAll({
                where: { phone, status: user_model_1.UserStatus.ACTIVE }
            });
            if (users.length !== 0)
                throw new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.REGISTER.EXIST_PHONE, '이미 존재하는 핸드폰번호 입니다.');
            let user = new user_model_1.User({
                email,
                password: cryptoHelper_1.cryptoHelper.encrypt(password),
                phone,
                birthday
            });
            let created = yield this.userRepository.save(user);
            return created;
        });
    }
}
exports.UserApi = UserApi;
//# sourceMappingURL=user.api.js.map
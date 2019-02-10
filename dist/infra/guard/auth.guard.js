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
const repositories_1 = require("@infra/sequelizejs/mysql/repositories");
const authenticator_1 = require("@utils/authenticator");
const HttpErrCode_1 = require("@common/constants/HttpErrCode");
const CustomError_1 = require("@common/models/CustomError");
function authGuard(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(args[0].cookies);
                let jwt = args[0].cookies.jwtToken;
                console.log('jwt: ', jwt);
                if (!jwt)
                    return args[2](new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.JWT.NO_TOKEN, 'jwt 토큰이 없습니다.'));
                let user = yield extractUserFromJwt(jwt);
                args.push(user);
                let result = originalMethod.apply(this, args);
                return result;
            }
            catch (err) {
                console.log(args[2]);
                return args[2](err);
            }
        });
    };
    return descriptor;
}
exports.authGuard = authGuard;
const extractUserFromJwt = (jwt) => __awaiter(this, void 0, void 0, function* () {
    let userRepository = new repositories_1.UserRepositoryImpl();
    let decoded = authenticator_1.decodeJwt(jwt);
    let users = yield userRepository.findAll({
        where: { id: decoded.user.id },
        raw: true
    });
    if (users.length === 0)
        throw new Error(HttpErrCode_1.HttpErrCode.LOGIN.NO_USER);
    return users[0];
});
//# sourceMappingURL=auth.guard.js.map
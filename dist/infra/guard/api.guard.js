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
const CustomError_1 = require("@common/models/CustomError");
const HttpErrCode_1 = require("@common/constants/HttpErrCode");
const authenticator_1 = require("@utils/authenticator");
const repositories_1 = require("@infra/sequelizejs/mysql/repositories");
function apiGuard(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let jwt = args[0].cookies['sa-jwt'];
                if (!jwt)
                    return args[2](new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.JWT.NO_TOKEN, 'jwt 토큰이 없습니다.'));
                let user = yield extractUserFromJwt(jwt);
                args.push(user);
                let result = originalMethod.apply(this, args);
                return result;
            }
            catch (err) {
                return args[2](err);
            }
        });
    };
    return descriptor;
}
exports.apiGuard = apiGuard;
const extractUserFromJwt = (jwt) => __awaiter(this, void 0, void 0, function* () {
    let apiUserRepository = new repositories_1.UserRepositoryImpl();
    let decoded = authenticator_1.decodeJwt(jwt);
    console.log('Decoded: ', decoded);
    let user = yield apiUserRepository.findById(decoded.user.id);
    if (!user)
        throw new Error(HttpErrCode_1.HttpErrCode.AUTH.NO_USER);
    return user;
});
//# sourceMappingURL=api.guard.js.map
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
const user_model_1 = require("@domain/user/user.model");
class UserRepositoryImpl {
    constructor() { }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.User.findAll(filter);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.User.findByPrimary(id);
        });
    }
    update(user, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.User.update(user, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.User.destroy(option);
        });
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
//# sourceMappingURL=user.repository.impl.js.map
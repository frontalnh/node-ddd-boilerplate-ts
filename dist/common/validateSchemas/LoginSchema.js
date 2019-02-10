"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.LoginSchema = joi_1.default.object().keys({
    email: joi_1.default.string()
        .email()
        .required(),
    password: joi_1.default.string().required()
});
//# sourceMappingURL=LoginSchema.js.map
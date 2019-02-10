"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.FilterSchema = joi_1.default.object().keys({
    where: joi_1.default.object(),
    limit: joi_1.default.number(),
    skip: joi_1.default.number(),
    offset: joi_1.default.number()
});
//# sourceMappingURL=FilterSchema.js.map
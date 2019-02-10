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
const payment_model_1 = require("@domain/payment/payment.model");
const json_dot_parser_1 = require("@frontalnh/json-dot-parser");
class PaymentRepositoryImpl {
    constructor() { }
    save(payment) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield payment.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield payment_model_1.Payment.findAll(filter);
            let datas = yield payment_model_1.Payment.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield payment_model_1.Payment.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield payment_model_1.Payment.count(filter);
        });
    }
    update(payment, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield payment_model_1.Payment.update(payment, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield payment_model_1.Payment.destroy(option);
        });
    }
}
exports.PaymentRepositoryImpl = PaymentRepositoryImpl;
//# sourceMappingURL=payment.repository.impl.js.map
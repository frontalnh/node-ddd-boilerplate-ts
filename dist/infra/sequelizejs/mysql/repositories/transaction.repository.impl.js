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
const transaction_model_1 = require("@domain/transaction/transaction.model");
class TransactionRepositoryImpl {
    constructor() { }
    save(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield transaction.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                filter.raw = true;
            return yield transaction_model_1.Transaction.findAll(filter);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield transaction_model_1.Transaction.findByPrimary(id, { raw: true });
        });
    }
    update(transaction, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield transaction_model_1.Transaction.update(transaction, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield transaction_model_1.Transaction.destroy(option);
        });
    }
}
exports.TransactionRepositoryImpl = TransactionRepositoryImpl;
//# sourceMappingURL=transaction.repository.impl.js.map
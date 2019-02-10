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
const order_model_1 = require("@domain/order/order.model");
const json_dot_parser_1 = require("@frontalnh/json-dot-parser");
class OrderRepositoryImpl {
    constructor() { }
    save(order) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield order.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield order_model_1.Order.findAll(filter);
            let datas = yield order_model_1.Order.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield order_model_1.Order.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield order_model_1.Order.count(filter);
        });
    }
    update(order, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield order_model_1.Order.update(order, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield order_model_1.Order.destroy(option);
        });
    }
}
exports.OrderRepositoryImpl = OrderRepositoryImpl;
//# sourceMappingURL=order.repository.impl.js.map
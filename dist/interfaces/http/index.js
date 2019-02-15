"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_route_1 = require("@interfaces/http/order.route");
const payment_route_1 = require("@interfaces/http/payment.route");
const user_route_1 = require("@interfaces/http/user.route");
const express = __importStar(require("express"));
exports.router = (components) => {
    let expressRouter = express.Router();
    const userRoute = new user_route_1.UserRoute(components.userRepository, components.userApi);
    const paymentRoute = new payment_route_1.PaymentRoute(components.paymentRepository);
    const orderRoute = new order_route_1.OrderRoute(components.orderRepository);
    // expressRouter.use('/api/v1/docs', swaggerRoute(express));
    expressRouter.use('/api/v1/users', userRoute.handle());
    expressRouter.use('/api/v1/payments', paymentRoute.handle());
    expressRouter.use('/api/v1/orders', orderRoute.handle());
    return expressRouter;
};
//# sourceMappingURL=index.js.map
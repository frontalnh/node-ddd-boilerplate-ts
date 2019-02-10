"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("@domain/user/user.model");
const order_model_1 = require("@domain/order/order.model");
const payment_model_1 = require("@domain/payment/payment.model");
require('dotenv').config();
const sequelize = new sequelize_typescript_1.Sequelize({
    database: process.env.MYSQL_DB_NAME,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
    dialect: process.env.DB_TYPE,
    url: process.env.MYSQL_URL,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
exports.sequelizeModels = [order_model_1.Order, payment_model_1.Payment, user_model_1.User];
sequelize.addModels(exports.sequelizeModels);
exports.default = {
    sequelize
};
//# sourceMappingURL=index.js.map
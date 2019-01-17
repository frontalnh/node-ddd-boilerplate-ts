import { Sequelize } from 'sequelize-typescript';
import { User } from '@domain/user/user.model';
import { Order } from '@domain/order/order.model';
import { Payment } from '@domain/payment/payment.model';

require('dotenv').config();

const sequelize = new Sequelize({
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

export const sequelizeModels = [Order, Payment, User];

sequelize.addModels(sequelizeModels);

export default {
  sequelize
};

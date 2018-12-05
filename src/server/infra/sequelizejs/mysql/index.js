import { Sequelize } from 'sequelize-typescript';
import { MysqlUser } from './models/MysqlUser';

require('dotenv').config();

console.log('#####');
const sequelize = new Sequelize({
  database: process.env.MYSQL_DB_NAME,
  username: process.env.MYSQL_USER_NAME,
  password: process.env.MYSQL_USER_PASSWORD,
  port: process.env.MYSQL_DB_PORT,
  dialect: process.env.DB_TYPE,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize.addModels([MysqlUser]);

export default {
  sequelize
};

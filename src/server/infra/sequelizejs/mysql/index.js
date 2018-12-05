var models = {};
var Sequelize = require('sequelize');
var Alliacne = require('./models/alliance');
var Question = require('./models/question');
require('dotenv').config();

console.log(process.env.DB_NAME);
const sequelize = new Sequelize(
  process.env.DB_NAME, // name of the db
  process.env.DB_USER, //
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_URL,
    port: process.env.DB_PORT,
    dialect: process.env.DB_TYPE,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

// define model
models['alliance'] = Alliacne(sequelize, Sequelize.DataTypes);
models['question'] = Question(sequelize, Sequelize.DataTypes);

models.sequelize = sequelize;

module.exports = models;

import bodyParser from 'body-parser';
import passport from 'passport';
import compression from 'compression';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {
  notFoundErrorHandler,
  domainErrHandler
} from './infra/middleware/errorHandlers';
import express from 'express';
import mysql, { sequelizeModels } from '@infra/sequelizejs/mysql/index.js';
import { logger } from '@utils/logger';
import { UserRepositoryImpl } from '@infra/sequelizejs/mysql/repositories';
import { UserApi } from '@api/user.api';

import { UserRepository } from '@domain/user/user.repository';
import mail from '@sendgrid/mail';
import { headerSetter } from '@infra/middleware/headerSetter';

import * as swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './infra/swagger/swagger-spec';
import * as swaggerGenerator from 'swagger-model-generator-ts';
import fs from 'fs';
import { PaymentRepository } from '@domain/payment/payment.repository';
import { PaymentRepositoryImpl } from '@infra/sequelizejs/mysql/repositories/payment.repository.impl';
import { OrderRepository } from '@domain/order/order.repository';
import { OrderRepositoryImpl } from '@infra/sequelizejs/mysql/repositories/order.repository.impl';
import { router } from '@interfaces/http';
const SEQUELIZE = 'SEQUELIZE';

require('typescript-require');
// require('ts-node').register();

export enum DBType {
  SEQUELIZE = 'SEQUELIZE',
  MONGODB = 'MONGODB'
}

export class Components {
  public userRepository: UserRepository;
  public paymentRepository: PaymentRepository;
  public orderRepository: OrderRepository;

  public userApi: UserApi;

  constructor() {
    // repositories
    this.paymentRepository = new PaymentRepositoryImpl();
    this.userRepository = new UserRepositoryImpl();
    this.orderRepository = new OrderRepositoryImpl();

    // apis
    this.userApi = new UserApi(this.userRepository);
  }
}
require('ts-node').register();

export class App {
  public async setup(): Promise<express.Express> {
    const app = express();

    // post body 설정을 위한 body parser
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
    app.use(bodyParser.json({ limit: '50mb' }));

    // 쿠키 파서를 세팅한다.
    app.use(cookieParser());

    app.use(headerSetter);
    app.use(compression());
    app.use(passport.initialize());

    // allow cors to sdf.splashpay.net for all routes
    app.use(cors(this.getCorsOption()));

    // sendgrid setting
    // this.setSendgrid();
    await this.initDB(DBType.SEQUELIZE);

    require('dotenv').config();

    // swagger settings start
    this.generateSwaggerDefinitions();
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // swagger settings end

    // ddd component setting start
    const components = new Components();
    app.use('/', router(components));
    // ddd component setting end

    // add error handler
    app.use(notFoundErrorHandler);
    app.use(domainErrHandler);

    return app;
  }

  private initDB = async (dbType: DBType) => {
    switch (dbType) {
      case SEQUELIZE: {
        // initialize sequelize mysql
        //sequelize의 싱크 작업을 시작하고 완료되면 설정된 포트를 통해서 통신 가능하도록 한다.
        // await mysql.sequelize.sync();
        // mysql.sequelize.
        await mysql.sequelize.sync();
      }
    }
  };

  private getCorsOption() {
    return {
      // TODO update to https
      origin: [
        'https://sdf.splashpay.net',
        'http://7go.io.s3-website.ap-northeast-2.amazonaws.com',
        'https://develop.splashpay.net',
        'http://localhost:3000',
        'http://localhost:1234'
      ],
      optionSuccessStatus: 200
    };
  }

  private setSendgrid() {
    const sendgirdAPIKey = process.env.SENDGRID_API_KEY;
    if (sendgirdAPIKey === undefined) {
      throw new Error(
        'Does not find the sendgrid api key. please check your system environment variables.'
      );
    }
    mail.setApiKey(sendgirdAPIKey);
  }

  private generateSwaggerDefinitions() {
    // generate swagger models
    swaggerGenerator.generate(sequelizeModels, {
      type: 'sequelize',
      path: './src/server/infra/swagger/models.js'
    });

    let files = fs.readdirSync('./src/server/common/validateSchemas');
    let schemas = [];
    for (let file of files) {
      let array = file.split('.');
      array.pop();
      file = array.join('');
      let fileObj = require('./common/validateSchemas/' + file);

      for (let key in fileObj) {
        if (typeof fileObj[key] === 'object') {
          let model = fileObj[key];
          model = model.tags(file.split('.')[0]);

          schemas.push(model);
        }
      }
    }
    swaggerGenerator.generate(schemas, {
      type: 'joi',
      path: './src/server/infra/swagger/schemas.js'
    });
  }
}

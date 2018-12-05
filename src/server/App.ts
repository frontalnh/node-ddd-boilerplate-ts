import bodyParser from 'body-parser';
import passport from 'passport';
import compression from 'compression';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {
  notFoundErrorHandler,
  domainErrHandler
} from './infra/middleware/errorHandlers';
import { UserRepositoryImpl } from './infra/mongodb/UserRepositoryImpl';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './infra/graphQL/resolvers/UserResolver';
import { ApolloServer } from 'apollo-server-express';
import { UserService } from './domain/user/user.service';
import { UserApi } from './api/user.api';

const SEQUELIZE = 'SEQUELIZE';
const MONGODB = 'MONGODB';

require('ts-node').register();

export const config = app => {
  // post body 설정을 위한 body parser
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
  app.use(bodyParser.json({ limit: '50mb' }));

  // 쿠키 파서를 세팅한다.
  app.use(cookieParser());

  // app.use(headerSetter);
  app.use(compression());
  app.use(passport.initialize());

  // allow cors to sdf.splashpay.net for all routes
  const corsOptions = {
    // TODO update to https
    origin: [
      'https://sdf.splashpay.net',
      'http://7go.io.s3-website.ap-northeast-2.amazonaws.com',
      'https://develop.splashpay.net'
    ],
    optionSuccessStatus: 200
  };
  app.use(cors(corsOptions));

  require('dotenv').config();
};

export const initDB = async (dbType: string): Promise<mongoose.Connection> => {
  switch (dbType) {
    case SEQUELIZE: {
      // initialize sequelize mysql
      var models = require('./infra/sequelizejs/mysql');

      //sequelize의 싱크 작업을 시작하고 완료되면 설정된 포트를 통해서 통신 가능하도록 한다.
      await models.sequelize.sync();
      // services = new Service(models);
    }

    case MONGODB: {
      await mongoose.connect(process.env.MONGO_REPLICA_SET);

      return mongoose.connection;
    }
    default: {
      return;
    }
  }
};

export const apolloSetup = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver]
  });

  return new ApolloServer({
    schema,
    context: ({ req }: { req: any }) => ({
      user: req.user
    })
  });
};

export const initComponent = connection => {
  // Repositories
  const userRepository = new UserRepositoryImpl();

  // services
  const userService = new UserService();

  // apis
  const userApi = new UserApi(userService, userRepository);

  return {
    userRepository,
    userService,
    userApi
  };
};

export const initErrorHandler = app => {
  // add error handler
  app.use(notFoundErrorHandler);
  app.use(domainErrHandler);
};

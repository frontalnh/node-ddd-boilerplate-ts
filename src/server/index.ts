import { config, initDB, initErrorHandler, apolloSetup } from './app';
import express from 'express';
import { logger } from './utils/logger';
import { passwordGuard } from './infra/middleware/passwordGuard';

const MONGODB = 'MONGODB';

const PORT = process.env.PORT || '3001';

const start = async () => {
  const app = express();
  config(app);
  // const connection = await initDB(MONGODB);
  // initRouter(app, connection);

  const apolloServer = await apolloSetup();
  app.use('/graphql', passwordGuard);
  apolloServer.applyMiddleware({ app });
  initErrorHandler(app);

  app.listen(PORT, () => {
    logger.info('Express server listening on port ' + PORT);
  });
};

start();

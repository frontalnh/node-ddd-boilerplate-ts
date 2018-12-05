import { config, initDB, initErrorHandler, apolloSetup, DBType } from './app';
import express from 'express';
import { logger } from './utils/logger';
import { passwordGuard } from './infra/middleware/passwordGuard';

const PORT = process.env.PORT || '3001';

const start = async () => {
  const app = express();
  config(app);
  await initDB(DBType.SEQUELIZE);
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

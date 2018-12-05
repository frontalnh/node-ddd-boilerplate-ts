import { UserRoute } from './interfaces/http/user.route';
import swaggerRoute from './interfaces/http/swagger.route';
import express from 'express';
import authGuard from './infra/guard/auth.guard';
import { initComponent } from './app';

export const initRouter = (app, connection) => {
  const components = initComponent(connection);

  app.use('/docs', swaggerRoute(express));
  const userRoute = new UserRoute(
    components.userService,
    components.userApi,
    components.userRepository
  );

  // routes
  app.use(authGuard(components.userRepository));

  // admin client
  app.use('/admin', express.static('client/admin'));
  app.use('/api/v1/users', userRoute.handle());

  // redirect false => not redirect when folder directory
  app.use(express.static('client'));
};

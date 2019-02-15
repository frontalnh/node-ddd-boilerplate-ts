import { OrderRoute } from '@interfaces/http/order.route';
import { PaymentRoute } from '@interfaces/http/payment.route';
import { UserRoute } from '@interfaces/http/user.route';
import * as express from 'express';
import { Components } from 'server/App';

export const router = (components: Components) => {
  let expressRouter = express.Router();
  const userRoute = new UserRoute(components.userRepository, components.userApi);
  const paymentRoute = new PaymentRoute(components.paymentRepository);
  const orderRoute = new OrderRoute(components.orderRepository);

  // expressRouter.use('/api/v1/docs', swaggerRoute(express));
  expressRouter.use('/api/v1/users', userRoute.handle());
  expressRouter.use('/api/v1/payments', paymentRoute.handle());
  expressRouter.use('/api/v1/orders', orderRoute.handle());

  return expressRouter;
};

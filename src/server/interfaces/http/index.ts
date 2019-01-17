import * as express from 'express';
import { OrderRoute } from '@interfaces/http/order.route';
import { UserRoute } from '@interfaces/http/user.route';
import { Components } from 'server/App';
import { PaymentRoute } from '@interfaces/http/payment.route';

export const router = (components: Components) => {
  let _router = express.Router();
  const userRoute = new UserRoute(
    components.userRepository,
    components.userApi
  );
  const paymentRoute = new PaymentRoute(components.paymentRepository);
  const orderRoute = new OrderRoute(components.orderRepository);

  // _router.use('/api/v1/docs', swaggerRoute(express));
  _router.use('/api/v1/users', userRoute.handle());
  _router.use('/api/v1/payments', paymentRoute.handle());
  _router.use('/api/v1/orders', orderRoute.handle());

  return _router;
};

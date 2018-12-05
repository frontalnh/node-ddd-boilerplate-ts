import { LoginDto } from '../../domain/auth/dto/login.dto';
import { Route } from './Route';
import { Router } from 'express';
import { AuthApi } from '../../api/auth.api';

export class AuthRoute implements Route {
  router: Router;
  authApi: AuthApi;
  constructor(express, authApi) {
    this.router = express.Router();
    this.authApi = authApi;
  }
  handle() {
    this.router.post('/login', async (req, res, next) => {
      const body = req.body;

      let dto = new LoginDto();
      let err = dto.validateAndApply(body);
      if (err) return next(err);

      const { phone, password } = dto;
      // login api
      this.authApi
        .login(phone, password)
        .then(result => {
          const { user, token } = result;

          res.cookie('jwtToken', token);
          res.send(user);
        })
        .catch(next);
    });

    this.router.post('/logout', async (req, res) => {
      res.clearCookie('jwtToken');
      return res.json({ done: true });
    });

    return this.router;
  }
}

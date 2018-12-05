import { UserApi } from 'server/api/user.api';
import { UserService } from '../../domain/user/user.service';
import { CreateUserDto } from '../../domain/user/dto/CreateUserDto';
import { UserRepository } from '../../domain/user/UserRepository';
import { Router } from 'express';
import { Route } from './Route';
import { encodeJwt } from '../../utils';
import express from 'express';

export class UserRoute implements Route {
  router: Router;
  userService: UserService;
  userApi: UserApi;
  userRepository: UserRepository;

  constructor(userService, userApi, userRepository) {
    this.router = express.Router();
    this.userService = userService;
    this.userApi = userApi;
    this.userRepository = userRepository;
  }

  handle() {
    this.router.post('', this._createUser);

    this.router.get('/me', this._getMyInfo);

    return this.router;
  }

  _createUser = (req, res, next) => {
    console.log('post users');
    const body = req.body;

    let dto = new CreateUserDto();

    let err = dto.validateAndApply(body);

    if (err) return next(err);

    this.userApi
      .register(body)
      .then(result => {
        res.cookie('jwtToken', result.token);
        res.send(result.user);
      })
      .catch(next);
  };

  _getMyInfo = (req, res, next) => {
    const { user } = req;
    const { token } = req;
    const jwtToken = encodeJwt({ _id: user._id });

    if (token === 'true') {
      return res.status(200).send({ user, token: jwtToken });
    }

    res.cookie('jwtToken', jwtToken);
    return res.status(200).send(user);
  };
}

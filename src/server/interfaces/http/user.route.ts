import { Route } from 'server/common/models/Route';
import * as express from 'express';
import { httpSuccessResponse } from '@utils/httpSender';
import { UserRepository } from '@domain/user/user.repository';
import Joi from 'joi';
import { CreateUserSchema } from '@common/validateSchemas/CreateUserSchema';
import { User, UserStatus } from '@domain/user/user.model';
import { UserApi } from '@api/user.api';
import { authGuard } from '@infra/guard/auth.guard';

import { apiGuard } from '@infra/guard/api.guard';
import { logger } from '@utils/logger';

export class UserRoute implements Route {
  private router: express.Router;
  constructor(
    private userRepository: UserRepository,
    private userApi: UserApi
  ) {
    this.userRepository = userRepository;
    this.userApi = userApi;
    this.router = express.Router();
  }
  handle() {
    /**
     * @swagger
     * /users:
     *   post:
     *     description: 유저를 만든다.
     *     tags:
     *       - Users
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: body
     *         type: object
     *         description: 만들고자 하는 유저의 정보
     *         schema:
     *           $ref: '#/definitions/CreateUserSchema'
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *           $ref: '#/definitions/User'
     */
    this.router.post('', (...args) => this.create(...args));

    /**
     * @swagger
     * /users/me:
     *   get:
     *     description: 내 로그인 정보를 받아온다.
     *     tags:
     *       - Users
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: cookie
     *         name: jwtToken
     *         type: string
     *         description: jwt 토큰
     *     responses:
     *       200:
     *         description: 로그인한 유저의 정보
     *         schema:
     *           $ref: '#/definitions/User'
     */
    this.router.post('/me', (...args) => this.getMyInfo(...args));

    /**
     * @swagger
     * /users:
     *   get:
     *     description: User API
     *     tags:
     *       - Users
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: query
     *         name: where
     *         type: object
     *         description: Where clause explains about the constraints used in find data
     *       - in: query
     *         name: limit
     *         type: integer
     *         description: How many data do you want?
     *       - in: query
     *         name: offset
     *         type: integer
     *         description: Where to start find data
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *           type: object
     *           properties:
     *             payload:
     *               type: array
     *               items:
     *                 $ref: '#/definitions/User'
     */
    this.router.get('', (...args) => this.findAll(...args));
    /**
     * @swagger
     * /users/{id}:
     *   get:
     *     description: User API
     *     tags:
     *       - Users
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: id
     *         type: number
     *         description: Single user
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *           $ref: '#/definitions/User'
     */
    this.router.get('/:id', (...args) => this.findById(...args));
    /**
     * @swagger
     * /users:
     *   put:
     *     description: Update user
     *     tags:
     *       - Users
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: body
     *         schema:
     *           properties:
     *             data:
     *               $ref: '#/definitions/User'
     *             option:
     *               type: object
     *               schema:
     *                 type: object
     *                 properties:
     *                   where:
     *                     type: string
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *           $ref: '#/definitions/User'
     */
    this.router.put('', (...args) => this.update(...args));
    /**
     * @swagger
     * /users:
     *   delete:
     *     description: Delete user
     *     tags:
     *       - Users
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: body
     *         schema:
     *           $ref: '#/definitions/User'
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *           properties:
     *             count:
     *               type: integer
     */
    this.router.delete('', (...args) => this.remove(...args));
    return this.router;
  }

  @authGuard
  private async getMyInfo(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
    user?: User
  ) {
    return res.send(user);
  }

  private async create(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      let { error } = Joi.validate(req.body, CreateUserSchema);
      if (error) return next(error);

      let { email, password, name, phone, birthday } = req.body;

      let created = await this.userApi.register(
        email,
        name,
        password,
        phone,
        birthday
      );

      return res.send(created);
    } catch (err) {
      return next(err);
    }
  }

  // @authGuard
  private async findAll(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      let users = await this.userRepository.findAll(req.query);
      let payload = users;
      return httpSuccessResponse(res, { payload });
    } catch (err) {
      return next(err);
    }
  }

  private async findById(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      let id = req.params.id;
      let user = await this.userRepository.findById(id);

      return res.send(user);
    } catch (err) {
      return next(err);
    }
  }

  private async update(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      let { data, option } = req.body;
      let [count, userList] = await this.userRepository.update(data, option);

      let payload = userList;
      return httpSuccessResponse(res, { payload, count });
    } catch (err) {
      return next(err);
    }
  }

  private async remove(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      let option = req.body;
      let count = await this.userRepository.delete(option);

      res.send(count.toString());
    } catch (err) {
      return next(err);
    }
  }
}

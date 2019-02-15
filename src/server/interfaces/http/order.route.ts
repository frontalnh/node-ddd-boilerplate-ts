import { FilterSchema } from '@common/validateSchemas/FilterSchema';
import { Order } from '@domain/order/order.model';
import { OrderRepository } from '@domain/order/order.repository';
import { httpSuccessResponse } from '@utils/httpSender';
import * as express from 'express';
import Joi from 'joi';
import { Route } from 'server/common/models/Route';

export class OrderRoute implements Route {
  private router: express.Router;
  constructor(private orderRepository: OrderRepository) {
    this.orderRepository = orderRepository;
    this.router = express.Router();
  }
  public handle() {
    /**
     * @swagger
     * /orders:
     *   post:
     *     description: Order API
     *     tags:
     *       - Orders
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: body
     *         schema:
     *           $ref: '#/definitions/Order'
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *           $ref: '#/definitions/Order'
     */
    this.router.post('', (...args) => this.create(...args));
    /**
     * @swagger
     * /orders:
     *   get:
     *     description: Order API
     *     tags:
     *       - Orders
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
     *                 $ref: '#/definitions/Order'
     */
    this.router.get('', (...args) => this.findAll(...args));
    /**
     * @swagger
     * /orders/{id}:
     *   get:
     *     description: Order API
     *     tags:
     *       - Orders
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: path
     *         name: id
     *         type: number
     *         description: Single order
     *     responses:
     *       200:
     *         description: Success
     *         schema:
     *           $ref: '#/definitions/Order'
     */
    this.router.get('/:id', (...args) => this.findById(...args));
    /**
     * @swagger
     * /orders:
     *   put:
     *     description: Update order
     *     tags:
     *       - Orders
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: body
     *         schema:
     *           properties:
     *             data:
     *               $ref: '#/definitions/Order'
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
     *           $ref: '#/definitions/Order'
     */
    this.router.put('', (...args) => this.update(...args));

    /**
     * @swagger
     * /orders:
     *   delete:
     *     description: Delete order
     *     tags:
     *       - Orders
     *     produces:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: body
     *         schema:
     *           $ref: '#/definitions/Order'
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

  private async create(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      let order = new Order(req.body);
      let created = await this.orderRepository.save(order);
      return res.send(created);
    } catch (err) {
      return next(err);
    }
  }

  // @authGuard
  private async findAll(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      let { value, error } = Joi.validate(req.query, FilterSchema, {
        convert: true
      });

      if (error) return next(error);

      let payload = await this.orderRepository.findAll(value);
      return httpSuccessResponse(res, { payload });
    } catch (err) {
      return next(err);
    }
  }

  private async findById(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      let id = req.params.id;
      let order = await this.orderRepository.findById(id);

      return res.send(order);
    } catch (err) {
      return next(err);
    }
  }

  private async update(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      let { data, option } = req.body;
      let [count, payload] = await this.orderRepository.update(data, option);

      return httpSuccessResponse(res, { payload, count });
    } catch (err) {
      return next(err);
    }
  }

  private async remove(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
      let option = req.body;
      let count = await this.orderRepository.delete(option);

      return httpSuccessResponse(res, { count });
    } catch (err) {
      return next(err);
    }
  }
}

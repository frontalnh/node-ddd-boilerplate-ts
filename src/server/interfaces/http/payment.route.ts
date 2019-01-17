
  import { Route } from 'server/common/models/Route';
  import * as express from 'express';
  import { httpSuccessResponse } from '@utils/httpSender';
  import { PaymentRepository } from '@domain/payment/payment.repository';
  import { FilterSchema } from '@common/validateSchemas/FilterSchema';
  import Joi from 'joi';
  import { Payment } from '@domain/payment/payment.model';

  export class PaymentRoute implements Route {
    private router: express.Router;
    constructor(private paymentRepository: PaymentRepository) {
      this.paymentRepository = paymentRepository;
      this.router = express.Router();
    }
    handle() {
      /**
       * @swagger
       * /payments:
       *   post:
       *     description: Payment API
       *     tags:
       *       - Payments
       *     produces:
       *       - application/json
       *     parameters:
       *       - in: body
       *         name: body
       *         schema:
       *           $ref: '#/definitions/Payment'
       *     responses:
       *       200:
       *         description: Success
       *         schema:
       *           $ref: '#/definitions/Payment'
       */
      this.router.post('', (...args) => this.create(...args));
      /**
       * @swagger
       * /payments:
       *   get:
       *     description: Payment API
       *     tags:
       *       - Payments
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
       *                 $ref: '#/definitions/Payment'
       */
      this.router.get('', (...args) => this.findAll(...args));
      /**
       * @swagger
       * /payments/{id}:
       *   get:
       *     description: Payment API
       *     tags:
       *       - Payments
       *     produces:
       *       - application/json
       *     parameters:
       *       - in: path
       *         name: id
       *         type: number
       *         description: Single payment
       *     responses:
       *       200:
       *         description: Success
       *         schema:
       *           $ref: '#/definitions/Payment'
       */
      this.router.get('/:id', (...args) => this.findById(...args));
      /**
       * @swagger
       * /payments:
       *   put:
       *     description: Update payment
       *     tags:
       *       - Payments
       *     produces:
       *       - application/json
       *     parameters:
       *       - in: body
       *         name: body
       *         schema:
       *           properties:
       *             data:
       *               $ref: '#/definitions/Payment'
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
       *           $ref: '#/definitions/Payment'
       */
      this.router.put('', (...args) => this.update(...args));
  
      /**
       * @swagger
       * /payments:
       *   delete:
       *     description: Delete payment
       *     tags:
       *       - Payments
       *     produces:
       *       - application/json
       *     parameters:
       *       - in: body
       *         name: body
       *         schema:
       *           $ref: '#/definitions/Payment'
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
  
    private async create(
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) {
      try {        
        let payment = new Payment(req.body)
        let created = await this.paymentRepository.save(payment);
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
        let { value, error } = Joi.validate(req.query, FilterSchema, {
          convert: true
        });
  
        if (error) return next(error);
        
        let payload = await this.paymentRepository.findAll(value);
        return httpSuccessResponse(res, {payload});
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
        let payment = await this.paymentRepository.findById(id);
  
        return res.send(payment);
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
        let [count, payload] = await this.paymentRepository.update(data, option);
  
        return httpSuccessResponse(res, {payload, count});
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
        let count = await this.paymentRepository.delete(option);
  
        return httpSuccessResponse(res, { count })
      } catch (err) {
        return next(err);
      }
    }
  }
  
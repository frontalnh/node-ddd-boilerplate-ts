"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FilterSchema_1 = require("@common/validateSchemas/FilterSchema");
const payment_model_1 = require("@domain/payment/payment.model");
const httpSender_1 = require("@utils/httpSender");
const express = __importStar(require("express"));
const joi_1 = __importDefault(require("joi"));
class PaymentRoute {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
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
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let payment = new payment_model_1.Payment(req.body);
                let created = yield this.paymentRepository.save(payment);
                return res.send(created);
            }
            catch (err) {
                return next(err);
            }
        });
    }
    // @authGuard
    findAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { value, error } = joi_1.default.validate(req.query, FilterSchema_1.FilterSchema, {
                    convert: true
                });
                if (error)
                    return next(error);
                let payload = yield this.paymentRepository.findAll(value);
                return httpSender_1.httpSuccessResponse(res, { payload });
            }
            catch (err) {
                return next(err);
            }
        });
    }
    findById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = req.params.id;
                let payment = yield this.paymentRepository.findById(id);
                return res.send(payment);
            }
            catch (err) {
                return next(err);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { data, option } = req.body;
                let [count, payload] = yield this.paymentRepository.update(data, option);
                return httpSender_1.httpSuccessResponse(res, { payload, count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let option = req.body;
                let count = yield this.paymentRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.PaymentRoute = PaymentRoute;
//# sourceMappingURL=payment.route.js.map
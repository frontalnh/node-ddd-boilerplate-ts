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
const order_model_1 = require("@domain/order/order.model");
const httpSender_1 = require("@utils/httpSender");
const express = __importStar(require("express"));
const joi_1 = __importDefault(require("joi"));
class OrderRoute {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
        this.orderRepository = orderRepository;
        this.router = express.Router();
    }
    handle() {
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
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let order = new order_model_1.Order(req.body);
                let created = yield this.orderRepository.save(order);
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
                let payload = yield this.orderRepository.findAll(value);
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
                let order = yield this.orderRepository.findById(id);
                return res.send(order);
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
                let [count, payload] = yield this.orderRepository.update(data, option);
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
                let count = yield this.orderRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.OrderRoute = OrderRoute;
//# sourceMappingURL=order.route.js.map
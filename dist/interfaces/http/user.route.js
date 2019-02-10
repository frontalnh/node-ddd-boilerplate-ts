"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const express = __importStar(require("express"));
const httpSender_1 = require("@utils/httpSender");
const joi_1 = __importDefault(require("joi"));
const CreateUserSchema_1 = require("@common/validateSchemas/CreateUserSchema");
const user_model_1 = require("@domain/user/user.model");
const auth_guard_1 = require("@infra/guard/auth.guard");
class UserRoute {
    constructor(userRepository, userApi) {
        this.userRepository = userRepository;
        this.userApi = userApi;
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
    getMyInfo(req, res, next, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.send(user);
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { error } = joi_1.default.validate(req.body, CreateUserSchema_1.CreateUserSchema);
                if (error)
                    return next(error);
                let { email, password, name, phone, birthday } = req.body;
                let created = yield this.userApi.register(email, name, password, phone, birthday);
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
                let users = yield this.userRepository.findAll(req.query);
                let payload = users;
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
                let user = yield this.userRepository.findById(id);
                return res.send(user);
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
                let [count, userList] = yield this.userRepository.update(data, option);
                let payload = userList;
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
                let count = yield this.userRepository.delete(option);
                res.send(count.toString());
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
__decorate([
    auth_guard_1.authGuard,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function, user_model_1.User]),
    __metadata("design:returntype", Promise)
], UserRoute.prototype, "getMyInfo", null);
exports.UserRoute = UserRoute;
//# sourceMappingURL=user.route.js.map
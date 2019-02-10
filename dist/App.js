"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const errorHandlers_1 = require("./infra/middleware/errorHandlers");
const express_1 = __importDefault(require("express"));
const index_js_1 = __importStar(require("@infra/sequelizejs/mysql/index.js"));
const repositories_1 = require("@infra/sequelizejs/mysql/repositories");
const user_api_1 = require("@api/user.api");
const mail_1 = __importDefault(require("@sendgrid/mail"));
const headerSetter_1 = require("@infra/middleware/headerSetter");
const swaggerUi = __importStar(require("swagger-ui-express"));
const swagger_spec_1 = require("./infra/swagger/swagger-spec");
const swaggerGenerator = __importStar(require("swagger-model-generator-ts"));
const fs_1 = __importDefault(require("fs"));
const payment_repository_impl_1 = require("@infra/sequelizejs/mysql/repositories/payment.repository.impl");
const order_repository_impl_1 = require("@infra/sequelizejs/mysql/repositories/order.repository.impl");
const http_1 = require("@interfaces/http");
const SEQUELIZE = 'SEQUELIZE';
require('typescript-require');
// require('ts-node').register();
var DBType;
(function (DBType) {
    DBType["SEQUELIZE"] = "SEQUELIZE";
    DBType["MONGODB"] = "MONGODB";
})(DBType = exports.DBType || (exports.DBType = {}));
class Components {
    constructor() {
        // repositories
        this.paymentRepository = new payment_repository_impl_1.PaymentRepositoryImpl();
        this.userRepository = new repositories_1.UserRepositoryImpl();
        this.orderRepository = new order_repository_impl_1.OrderRepositoryImpl();
        // apis
        this.userApi = new user_api_1.UserApi(this.userRepository);
    }
}
exports.Components = Components;
require('ts-node').register();
class App {
    constructor() {
        this.initDB = (dbType) => __awaiter(this, void 0, void 0, function* () {
            switch (dbType) {
                case SEQUELIZE: {
                    // initialize sequelize mysql
                    //sequelize의 싱크 작업을 시작하고 완료되면 설정된 포트를 통해서 통신 가능하도록 한다.
                    // await mysql.sequelize.sync();
                    // mysql.sequelize.
                    yield index_js_1.default.sequelize.sync();
                }
            }
        });
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = express_1.default();
            // post body 설정을 위한 body parser
            app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: false }));
            app.use(body_parser_1.default.json({ limit: '50mb' }));
            // 쿠키 파서를 세팅한다.
            app.use(cookie_parser_1.default());
            app.use(headerSetter_1.headerSetter);
            app.use(compression_1.default());
            app.use(passport_1.default.initialize());
            // allow cors to sdf.splashpay.net for all routes
            app.use(cors_1.default(this.getCorsOption()));
            // sendgrid setting
            // this.setSendgrid();
            yield this.initDB(DBType.SEQUELIZE);
            require('dotenv').config();
            // swagger settings start
            this.generateSwaggerDefinitions();
            app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger_spec_1.swaggerSpec));
            // swagger settings end
            // ddd component setting start
            const components = new Components();
            app.use('/', http_1.router(components));
            // ddd component setting end
            // add error handler
            app.use(errorHandlers_1.notFoundErrorHandler);
            app.use(errorHandlers_1.domainErrHandler);
            return app;
        });
    }
    getCorsOption() {
        return {
            // TODO update to https
            origin: [
                'https://sdf.splashpay.net',
                'http://7go.io.s3-website.ap-northeast-2.amazonaws.com',
                'https://develop.splashpay.net',
                'http://localhost:3000',
                'http://localhost:1234'
            ],
            optionSuccessStatus: 200
        };
    }
    setSendgrid() {
        const sendgirdAPIKey = process.env.SENDGRID_API_KEY;
        if (sendgirdAPIKey === undefined) {
            throw new Error('Does not find the sendgrid api key. please check your system environment variables.');
        }
        mail_1.default.setApiKey(sendgirdAPIKey);
    }
    generateSwaggerDefinitions() {
        // generate swagger models
        swaggerGenerator.generate(index_js_1.sequelizeModels, {
            type: 'sequelize',
            path: './src/server/infra/swagger/models.js'
        });
        let files = fs_1.default.readdirSync('./src/server/common/validateSchemas');
        let schemas = [];
        for (let file of files) {
            let array = file.split('.');
            array.pop();
            file = array.join('');
            let fileObj = require('./common/validateSchemas/' + file);
            for (let key in fileObj) {
                if (typeof fileObj[key] === 'object') {
                    let model = fileObj[key];
                    model = model.tags(file.split('.')[0]);
                    schemas.push(model);
                }
            }
        }
        swaggerGenerator.generate(schemas, {
            type: 'joi',
            path: './src/server/infra/swagger/schemas.js'
        });
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map
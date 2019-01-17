/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/server/App.ts":
/*!***************************!*\
  !*** ./src/server/App.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
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
const body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
const passport_1 = __importDefault(__webpack_require__(/*! passport */ "passport"));
const compression_1 = __importDefault(__webpack_require__(/*! compression */ "compression"));
const cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
const cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ "cookie-parser"));
const errorHandlers_1 = __webpack_require__(/*! ./infra/middleware/errorHandlers */ "./src/server/infra/middleware/errorHandlers.ts");
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const index_js_1 = __importStar(__webpack_require__(/*! @infra/sequelizejs/mysql/index.js */ "./src/server/infra/sequelizejs/mysql/index.js"));
const logger_1 = __webpack_require__(/*! @utils/logger */ "./src/server/utils/logger.ts");
const http_1 = __webpack_require__(/*! @interfaces/http */ "./src/server/interfaces/http/index.ts");
const repositories_1 = __webpack_require__(/*! @infra/sequelizejs/mysql/repositories */ "./src/server/infra/sequelizejs/mysql/repositories/index.ts");
const user_api_1 = __webpack_require__(/*! @api/user.api */ "./src/server/api/user.api.ts");
const user_service_1 = __webpack_require__(/*! @domain/user/user.service */ "./src/server/domain/user/user.service.ts");
const reward_repository_impl_1 = __webpack_require__(/*! @infra/sequelizejs/mysql/repositories/reward.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/reward.repository.impl.ts");
const asset_api_1 = __webpack_require__(/*! @api/asset.api */ "./src/server/api/asset.api.ts");
const monthly_asset_info_repository_impl_1 = __webpack_require__(/*! @infra/sequelizejs/mysql/repositories/monthly-asset-info.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/monthly-asset-info.repository.impl.ts");
const monthly_asset_info_service_1 = __webpack_require__(/*! @domain/monthly-asset-info/monthly-asset-info.service */ "./src/server/domain/monthly-asset-info/monthly-asset-info.service.ts");
const auth_api_1 = __webpack_require__(/*! @api/auth.api */ "./src/server/api/auth.api.ts");
const mail_1 = __importDefault(__webpack_require__(/*! @sendgrid/mail */ "@sendgrid/mail"));
const headerSetter_1 = __webpack_require__(/*! @infra/middleware/headerSetter */ "./src/server/infra/middleware/headerSetter.ts");
const swaggerUi = __importStar(__webpack_require__(/*! swagger-ui-express */ "swagger-ui-express"));
const swagger_spec_1 = __webpack_require__(/*! ./infra/swagger/swagger-spec */ "./src/server/infra/swagger/swagger-spec.js");
const pocket_repository_impl_1 = __webpack_require__(/*! @infra/sequelizejs/mysql/repositories/pocket.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/pocket.repository.impl.ts");
const swaggerGenerator = __importStar(__webpack_require__(/*! swagger-model-generator-ts */ "swagger-model-generator-ts"));
const pocket_service_1 = __webpack_require__(/*! @domain/pocket/pocket.service */ "./src/server/domain/pocket/pocket.service.ts");
const wallet_service_1 = __webpack_require__(/*! @domain/wallet/wallet.service */ "./src/server/domain/wallet/wallet.service.ts");
const connected_account_service_1 = __webpack_require__(/*! @domain/connected-account/connected-account.service */ "./src/server/domain/connected-account/connected-account.service.ts");
const fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
const connected_account_repository_impl_1 = __webpack_require__(/*! @infra/sequelizejs/mysql/repositories/connected-account.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/connected-account.repository.impl.ts");
const api_user_repository_impl_1 = __webpack_require__(/*! @infra/sequelizejs/mysql/repositories/api-user.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/api-user.repository.impl.ts");
const PORT = process.env.PORT || '3001';
const SEQUELIZE = 'SEQUELIZE';
__webpack_require__(/*! typescript-require */ "typescript-require");
// require('ts-node').register();
var DBType;
(function (DBType) {
    DBType["SEQUELIZE"] = "SEQUELIZE";
    DBType["MONGODB"] = "MONGODB";
})(DBType = exports.DBType || (exports.DBType = {}));
class Components {
    constructor() {
        // repositories
        this.appliedCouponRepository = new repositories_1.AppliedCouponRepositoryImpl();
        this.assetDescRepository = new repositories_1.AssetDescRepositoryImpl();
        this.assetImageRepository = new repositories_1.AssetImageRepositoryImpl();
        this.assetRepository = new repositories_1.AssetRepositoryImpl();
        this.categoryRepository = new repositories_1.CategoryRepositoryImpl();
        this.couponRepository = new repositories_1.CouponRepositoryImpl();
        this.ethereumConfigRepository = new repositories_1.EthereumConfigRepositoryImpl();
        this.exchangeRateRepository = new repositories_1.ExchangeRateRepositoryImpl();
        this.externalWalletRepository = new repositories_1.ExternalWalletRepositoryImpl();
        this.orderRepository = new repositories_1.OrderRepositoryImpl();
        this.rewardRepository = new reward_repository_impl_1.RewardRepositoryImpl();
        this.salesProposalRepository = new repositories_1.SalesProposalRepositoryImpl();
        this.salesRepository = new repositories_1.SalesRepositoryImpl();
        this.tokenRepository = new repositories_1.TokenRepositoryImpl();
        this.transactionRepository = new repositories_1.TransactionRepositoryImpl();
        this.userRepository = new repositories_1.UserRepositoryImpl();
        this.walletRepository = new repositories_1.WalletRepositoryImpl();
        this.monthlyAssetInfoRepository = new monthly_asset_info_repository_impl_1.MonthlyAssetInfoRepositoryImpl();
        this.pocketRepository = new pocket_repository_impl_1.PocketRepositoryImpl();
        this.connectedAccountRepository = new connected_account_repository_impl_1.ConnectedAccountRepositoryImpl();
        this.apiUserRepository = new api_user_repository_impl_1.ApiUserRepositoryImpl();
        // services
        this.walletService = new wallet_service_1.WalletService(this.walletRepository);
        this.connectedAccountService = new connected_account_service_1.ConnectedAccountService(this.connectedAccountRepository);
        this.pocketService = new pocket_service_1.PocketService(this.pocketRepository);
        this.userService = new user_service_1.UserService(this.userRepository, this.pocketService, this.walletService);
        this.monthlyAssetInfoService = new monthly_asset_info_service_1.MonthlyAssetInfoService(this.monthlyAssetInfoRepository);
        // apis
        this.userApi = new user_api_1.UserApi(this.userService, this.userRepository, this.walletService, this.pocketRepository);
        this.assetApi = new asset_api_1.AssetApi(this.assetRepository, this.transactionRepository, this.monthlyAssetInfoService);
        this.authApi = new auth_api_1.AuthApi(this.userRepository);
    }
}
exports.Components = Components;
__webpack_require__(/*! ts-node */ "ts-node").register();
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
    start() {
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
            this.setSendgrid();
            yield this.initDB(DBType.SEQUELIZE);
            __webpack_require__(/*! dotenv */ "dotenv").config();
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
            app.listen(PORT, () => {
                logger_1.logger.info('Express server listening on port ' + PORT);
            });
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
        const sendgirdAPIKey = "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";
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
            let fileObj = __webpack_require__("./src/server/common/validateSchemas sync recursive ^\\.\\/.*$")("./" + file);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/server/api/asset.api.ts":
/*!*************************************!*\
  !*** ./src/server/api/asset.api.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __webpack_require__(/*! assert */ "assert");
class AssetApi {
    constructor(assetRepository, transactionRepository, monthlyAssetInfoService) {
        this.assetRepository = assetRepository;
        this.transactionRepository = transactionRepository;
        this.monthlyAssetInfoService = monthlyAssetInfoService;
    }
    findAssetWithStatisticInfo(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let userId = parseInt(filter.where.userId);
            assert.equal(typeof filter.where.userId, 'string');
            assert.equal(typeof userId, 'number');
            let assets = yield this.assetRepository.findAll({
                where: { userId },
                raw: true
            });
            for (let asset of assets) {
                let { totalInvestAmount } = yield this.transactionRepository.getTotalAmount(userId, asset.id);
                asset.totalInvestAmount = totalInvestAmount;
                asset.totalThisMonthRevenue = yield this.monthlyAssetInfoService.getThisMonthRevenue(asset);
            }
            return assets;
        });
    }
}
exports.AssetApi = AssetApi;


/***/ }),

/***/ "./src/server/api/auth.api.ts":
/*!************************************!*\
  !*** ./src/server/api/auth.api.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpErrCode_1 = __webpack_require__(/*! ../common/constants/HttpErrCode */ "./src/server/common/constants/HttpErrCode.ts");
const authenticator_1 = __webpack_require__(/*! @utils/authenticator */ "./src/server/utils/authenticator.ts");
const user_model_1 = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
const CustomError_1 = __webpack_require__(/*! @common/models/CustomError */ "./src/server/common/models/CustomError.ts");
class AuthApi {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    authenticateEmail(email, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield this.userRepository.findAll({
                where: {
                    email,
                    status: user_model_1.UserStatus.UNAUTHORIZED
                },
                order: [['createdAt', 'DESC']]
            });
            if (users.length === 0)
                throw new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.VERIFY_EMAIL.NO_USER, '일치하는 회원정보가 없습니다.');
            let user = users[0];
            user.status = user_model_1.UserStatus.ACTIVE;
            yield this.userRepository.save(user);
            if (user.emailVerificationCode === code)
                return true;
            throw new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.VERIFY_EMAIL.INVALID_CODE);
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield this.userRepository.findAll({
                where: { email, status: user_model_1.UserStatus.ACTIVE }
            });
            if (users.length == 0) {
                throw new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.LOGIN.NO_USER);
            }
            let user = users[0];
            if (!user.comparePassword(password)) {
                throw new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.LOGIN.INVALID_PASSWORD, '잘못된 비밀번호 입니다.');
            }
            const jwtToken = authenticator_1.encodeJwt({ user: { id: user.id } });
            return { user, token: jwtToken };
        });
    }
}
exports.AuthApi = AuthApi;


/***/ }),

/***/ "./src/server/api/user.api.ts":
/*!************************************!*\
  !*** ./src/server/api/user.api.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
const CustomError_1 = __webpack_require__(/*! @common/models/CustomError */ "./src/server/common/models/CustomError.ts");
const HttpErrCode_1 = __webpack_require__(/*! @common/constants/HttpErrCode */ "./src/server/common/constants/HttpErrCode.ts");
const authenticator_1 = __webpack_require__(/*! @utils/authenticator */ "./src/server/utils/authenticator.ts");
const mailer_1 = __webpack_require__(/*! @utils/mailer */ "./src/server/utils/mailer.ts");
const helper_1 = __webpack_require__(/*! @utils/helper */ "./src/server/utils/helper.ts");
const pocket_model_1 = __webpack_require__(/*! @domain/pocket/pocket.model */ "./src/server/domain/pocket/pocket.model.ts");
class UserApi {
    constructor(userService, userRepository, walletService, pocketRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
        this.walletService = walletService;
        this.pocketRepository = pocketRepository;
        this.userService = userService;
        this.userRepository = userRepository;
        this.walletService = walletService;
        this.pocketRepository = pocketRepository;
    }
    register(email, name, password, phone, birthday) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield this.userRepository.findAll({
                where: { email, status: user_model_1.UserStatus.ACTIVE }
            });
            if (users.length !== 0)
                throw new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.REGISTER.EXIST_EMAIL, '이미 존재하는 이메일입니다.');
            users = yield this.userRepository.findAll({
                where: { phone, status: user_model_1.UserStatus.ACTIVE }
            });
            if (users.length !== 0)
                throw new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.REGISTER.EXIST_PHONE, '이미 존재하는 핸드폰번호 입니다.');
            let code = helper_1.genRandomNumber(6);
            let user = new user_model_1.User({
                email,
                password: authenticator_1.encrypt(password),
                emailVerificationCode: code,
                phone,
                birthday
            });
            let created = yield this.userRepository.save(user);
            console.log('created!', created.id);
            let wallet = yield this.walletService.popWallet();
            let pocket = new pocket_model_1.Pocket();
            pocket.userId = created.id;
            pocket.walletId = wallet.id;
            pocket.selectedColumn = pocket_model_1.SelectedColumn.walletId;
            yield this.pocketRepository.save(pocket);
            mailer_1.mailer.send({ name, email }, '비밀번호를 인증해 주세요.', `<html>
        <a href="http://localhost:3001/api/v1/auth/verify-email?email=${email}&code=${code}">인증하기</a>
      </html>`);
            return created;
        });
    }
}
exports.UserApi = UserApi;


/***/ }),

/***/ "./src/server/common/Constants.ts":
/*!****************************************!*\
  !*** ./src/server/common/Constants.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = {
    TEST_DATA: {
        PHONE: '01000000000',
        PASSWORD: 'test1234'
    },
    BCRYPT: {
        SALT_WORK_FACTOR: 10
    }
};


/***/ }),

/***/ "./src/server/common/constants/HttpErrCode.ts":
/*!****************************************************!*\
  !*** ./src/server/common/constants/HttpErrCode.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpErrCode = {
    JWT: { NO_TOKEN: 'JWT.NO_TOKEN' },
    LOGIN: {
        NO_USER: 'LOGIN.NO_USER',
        INVALID_PASSWORD: 'LOGIN.INVALID_PASSWORD',
        NOT_AUTHORIZED: 'LOGIN.NOT_AUTHORIZED'
    },
    REGISTER: {
        EXIST_PHONE: 'REGISTER.EXIST_PHONE',
        EXIST_EMAIL: 'REGISTER.EXIST_EMAIL',
        NO_AVAILABLE_WALLET: 'NO_AVAILABLE_WALLET'
    },
    API: {
        EXIST_ID: 'API.EXIST_ID',
        NO_USER: 'API.NO_USER',
        INVALID_PASSWORD: 'API.INVALID_PASSWORD'
    },
    VERIFY_EMAIL: {
        NO_USER: 'VERIFY_EMAIL.NO_USER',
        INVALID_CODE: 'VERIFY_EMAIL.INVALID_CODE'
    },
    CREATE_POCKET: {
        ALREADY_EXIST: 'CREATE_POCKET.ALREADY_EXIST'
    }
};


/***/ }),

/***/ "./src/server/common/constants/HttpStatus.ts":
/*!***************************************************!*\
  !*** ./src/server/common/constants/HttpStatus.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatus = {
    OK: 200,
    BAD_REQUEST: 400,
    VALIDATION_FAIL: 401,
    INTERNAL_ERROR: 503
};


/***/ }),

/***/ "./src/server/common/models/Currency.ts":
/*!**********************************************!*\
  !*** ./src/server/common/models/Currency.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Currency;
(function (Currency) {
    Currency["WON"] = "WON";
    Currency["USD"] = "USD";
    Currency["BWX"] = "BWX";
})(Currency = exports.Currency || (exports.Currency = {}));


/***/ }),

/***/ "./src/server/common/models/CustomError.ts":
/*!*************************************************!*\
  !*** ./src/server/common/models/CustomError.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(code, message) {
        super(message);
        this.code = code;
        this.message = message;
    }
}
exports.CustomError = CustomError;


/***/ }),

/***/ "./src/server/common/validateSchemas sync recursive ^\\.\\/.*$":
/*!*********************************************************!*\
  !*** ./src/server/common/validateSchemas sync ^\.\/.*$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./CreateApiUserSchema": "./src/server/common/validateSchemas/CreateApiUserSchema.ts",
	"./CreateApiUserSchema.ts": "./src/server/common/validateSchemas/CreateApiUserSchema.ts",
	"./CreateAppliedCouponSchema": "./src/server/common/validateSchemas/CreateAppliedCouponSchema.ts",
	"./CreateAppliedCouponSchema.ts": "./src/server/common/validateSchemas/CreateAppliedCouponSchema.ts",
	"./CreateAssetSchema": "./src/server/common/validateSchemas/CreateAssetSchema.ts",
	"./CreateAssetSchema.ts": "./src/server/common/validateSchemas/CreateAssetSchema.ts",
	"./CreateCouponSchema": "./src/server/common/validateSchemas/CreateCouponSchema.ts",
	"./CreateCouponSchema.ts": "./src/server/common/validateSchemas/CreateCouponSchema.ts",
	"./CreateOrderSchema": "./src/server/common/validateSchemas/CreateOrderSchema.ts",
	"./CreateOrderSchema.ts": "./src/server/common/validateSchemas/CreateOrderSchema.ts",
	"./CreateRewardSchema": "./src/server/common/validateSchemas/CreateRewardSchema.ts",
	"./CreateRewardSchema.ts": "./src/server/common/validateSchemas/CreateRewardSchema.ts",
	"./CreateSalesSchema": "./src/server/common/validateSchemas/CreateSalesSchema.ts",
	"./CreateSalesSchema.ts": "./src/server/common/validateSchemas/CreateSalesSchema.ts",
	"./CreateSplashUserSchema": "./src/server/common/validateSchemas/CreateSplashUserSchema.ts",
	"./CreateSplashUserSchema.ts": "./src/server/common/validateSchemas/CreateSplashUserSchema.ts",
	"./CreateUserSchema": "./src/server/common/validateSchemas/CreateUserSchema.ts",
	"./CreateUserSchema.ts": "./src/server/common/validateSchemas/CreateUserSchema.ts",
	"./FilterSchema": "./src/server/common/validateSchemas/FilterSchema.ts",
	"./FilterSchema.ts": "./src/server/common/validateSchemas/FilterSchema.ts",
	"./GetApiTokenSchema": "./src/server/common/validateSchemas/GetApiTokenSchema.ts",
	"./GetApiTokenSchema.ts": "./src/server/common/validateSchemas/GetApiTokenSchema.ts",
	"./LoginSchema": "./src/server/common/validateSchemas/LoginSchema.ts",
	"./LoginSchema.ts": "./src/server/common/validateSchemas/LoginSchema.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/server/common/validateSchemas sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/server/common/validateSchemas/CreateApiUserSchema.ts":
/*!******************************************************************!*\
  !*** ./src/server/common/validateSchemas/CreateApiUserSchema.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
exports.CreateApiUserSchema = joi_1.default.object().keys({
    id: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    password: joi_1.default.string().required()
});


/***/ }),

/***/ "./src/server/common/validateSchemas/CreateAppliedCouponSchema.ts":
/*!************************************************************************!*\
  !*** ./src/server/common/validateSchemas/CreateAppliedCouponSchema.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
exports.CreateAppliedCouponSchema = joi_1.default.object().keys({
    orderId: joi_1.default.number().required(),
    couponId: joi_1.default.number().required()
});


/***/ }),

/***/ "./src/server/common/validateSchemas/CreateAssetSchema.ts":
/*!****************************************************************!*\
  !*** ./src/server/common/validateSchemas/CreateAssetSchema.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const asset_model_1 = __webpack_require__(/*! @domain/asset/asset.model */ "./src/server/domain/asset/asset.model.ts");
exports.CreateAssetSchema = joi_1.default.object().keys({
    userId: joi_1.default.number().required(),
    name: joi_1.default.string().required(),
    type: joi_1.default.string()
        .required()
        .valid(Object.keys(asset_model_1.AssetType)),
    coutry: joi_1.default.string()
        .valid(Object.keys(asset_model_1.Country))
        .required(),
    address: joi_1.default.string()
        .required()
        .min(10),
    minInterest: joi_1.default.number().positive(),
    maxInterest: joi_1.default.number()
        .max(100)
        .required(),
    tokenId: joi_1.default.number()
        .positive()
        .required()
});


/***/ }),

/***/ "./src/server/common/validateSchemas/CreateCouponSchema.ts":
/*!*****************************************************************!*\
  !*** ./src/server/common/validateSchemas/CreateCouponSchema.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
exports.CreateCouponSchema = joi_1.default.object().keys({
    publisher: joi_1.default.number().required(),
    receiver: joi_1.default.number().required(),
    assetId: joi_1.default.number().required(),
    amount: joi_1.default.number().required(),
    name: joi_1.default.string()
        .min(4)
        .required()
});


/***/ }),

/***/ "./src/server/common/validateSchemas/CreateOrderSchema.ts":
/*!****************************************************************!*\
  !*** ./src/server/common/validateSchemas/CreateOrderSchema.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const order_model_1 = __webpack_require__(/*! ../../domain/order/order.model */ "./src/server/domain/order/order.model.ts");
const Currency_1 = __webpack_require__(/*! ../models/Currency */ "./src/server/common/models/Currency.ts");
exports.CreateOrderSchema = joi_1.default.object().keys({
    userId: joi_1.default.number()
        .required()
        .positive(),
    salesId: joi_1.default.number()
        .positive()
        .required(),
    tokenId: joi_1.default.number()
        .required()
        .positive(),
    status: joi_1.default.string()
        .valid(Object.keys(order_model_1.OrderStatus))
        .required(),
    hash: joi_1.default.string().required(),
    purchasePrice: joi_1.default.number()
        .positive()
        .required(),
    purchaseCurrency: joi_1.default.string()
        .valid(Object.keys(Currency_1.Currency))
        .required(),
    tokenAmount: joi_1.default.number()
        .positive()
        .required()
});


/***/ }),

/***/ "./src/server/common/validateSchemas/CreateRewardSchema.ts":
/*!*****************************************************************!*\
  !*** ./src/server/common/validateSchemas/CreateRewardSchema.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
exports.CreateRewardSchema = joi_1.default.object().keys({
    from: joi_1.default.number().required(),
    to: joi_1.default.number().required(),
    salesId: joi_1.default.number().required(),
    assetId: joi_1.default.number().required(),
    orderId: joi_1.default.number().required(),
    amount: joi_1.default.number().required(),
    currency: joi_1.default.number().required()
});


/***/ }),

/***/ "./src/server/common/validateSchemas/CreateSalesSchema.ts":
/*!****************************************************************!*\
  !*** ./src/server/common/validateSchemas/CreateSalesSchema.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
exports.CreateSalesSchema = joi_1.default.object().keys({
    assetId: joi_1.default.number().required(),
    name: joi_1.default.string().required(),
    fiatPrice: joi_1.default.number().required(),
    fiatCurrency: joi_1.default.string().required(),
    hardCap: joi_1.default.number()
        .positive()
        .required(),
    individualSoftCap: joi_1.default.number().required(),
    interestAmount: joi_1.default.number().required(),
    startAt: joi_1.default.date().required(),
    endAt: joi_1.default.date().required()
});


/***/ }),

/***/ "./src/server/common/validateSchemas/CreateSplashUserSchema.ts":
/*!*********************************************************************!*\
  !*** ./src/server/common/validateSchemas/CreateSplashUserSchema.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
exports.CreateSplashUserSchema = joi_1.default.object().keys({
    phone: joi_1.default.string().required(),
    firstName: joi_1.default.string().required(),
    birthday: joi_1.default.string()
        .length(10)
        .required()
});


/***/ }),

/***/ "./src/server/common/validateSchemas/CreateUserSchema.ts":
/*!***************************************************************!*\
  !*** ./src/server/common/validateSchemas/CreateUserSchema.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
exports.CreateUserSchema = joi_1.default.object().keys({
    email: joi_1.default.string()
        .email()
        .required(),
    password: joi_1.default.string().required(),
    phone: joi_1.default.string().required(),
    birthday: joi_1.default.string()
        .length(10)
        .required()
});


/***/ }),

/***/ "./src/server/common/validateSchemas/FilterSchema.ts":
/*!***********************************************************!*\
  !*** ./src/server/common/validateSchemas/FilterSchema.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
exports.FilterSchema = joi_1.default.object().keys({
    where: joi_1.default.object(),
    limit: joi_1.default.number(),
    skip: joi_1.default.number(),
    offset: joi_1.default.number()
});


/***/ }),

/***/ "./src/server/common/validateSchemas/GetApiTokenSchema.ts":
/*!****************************************************************!*\
  !*** ./src/server/common/validateSchemas/GetApiTokenSchema.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
exports.GetApiTokenSchema = joi_1.default.object().keys({
    id: joi_1.default.string().required(),
    password: joi_1.default.string().required()
});


/***/ }),

/***/ "./src/server/common/validateSchemas/LoginSchema.ts":
/*!**********************************************************!*\
  !*** ./src/server/common/validateSchemas/LoginSchema.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
exports.LoginSchema = joi_1.default.object().keys({
    email: joi_1.default.string()
        .email()
        .required(),
    password: joi_1.default.string().required()
});


/***/ }),

/***/ "./src/server/domain/api-user/api-user.model.ts":
/*!******************************************************!*\
  !*** ./src/server/domain/api-user/api-user.model.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
let ApiUser = class ApiUser extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, comment: 'API 를 사용하는 유저의 id 이다.' }),
    __metadata("design:type", String)
], ApiUser.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], ApiUser.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], ApiUser.prototype, "password", void 0);
ApiUser = __decorate([
    sequelize_typescript_1.Table({ modelName: 'api-user', underscored: true })
], ApiUser);
exports.ApiUser = ApiUser;


/***/ }),

/***/ "./src/server/domain/applied-coupon/applied-coupon.model.ts":
/*!******************************************************************!*\
  !*** ./src/server/domain/applied-coupon/applied-coupon.model.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const order_model_1 = __webpack_require__(/*! ../order/order.model */ "./src/server/domain/order/order.model.ts");
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const coupon_model_1 = __webpack_require__(/*! @domain/coupon/coupon.model */ "./src/server/domain/coupon/coupon.model.ts");
let AppliedCoupon = class AppliedCoupon extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], AppliedCoupon.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => order_model_1.Order),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], AppliedCoupon.prototype, "orderId", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => coupon_model_1.Coupon),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: 'The Id of the coupon which is applied to specific order'
    }),
    __metadata("design:type", Number)
], AppliedCoupon.prototype, "couponId", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], AppliedCoupon.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], AppliedCoupon.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => coupon_model_1.Coupon),
    __metadata("design:type", coupon_model_1.Coupon)
], AppliedCoupon.prototype, "coupon", void 0);
AppliedCoupon = __decorate([
    sequelize_typescript_1.DefaultScope({ include: [() => coupon_model_1.Coupon] }),
    sequelize_typescript_1.Table({
        modelName: 'applied-coupon',
        underscored: true,
        comment: 'The list of coupons which is applied to specific order'
    })
], AppliedCoupon);
exports.AppliedCoupon = AppliedCoupon;


/***/ }),

/***/ "./src/server/domain/asset-desc/asset-desc.model.ts":
/*!**********************************************************!*\
  !*** ./src/server/domain/asset-desc/asset-desc.model.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
let AssetDesc = class AssetDesc extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], AssetDesc.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], AssetDesc.prototype, "assetId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AssetDesc.prototype, "lang", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        comment: 'The description of asset'
    }),
    __metadata("design:type", String)
], AssetDesc.prototype, "assetDesc", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], AssetDesc.prototype, "companyDesc", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], AssetDesc.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], AssetDesc.prototype, "updatedAt", void 0);
AssetDesc = __decorate([
    sequelize_typescript_1.Table({ modelName: 'asset-desc' })
], AssetDesc);
exports.AssetDesc = AssetDesc;


/***/ }),

/***/ "./src/server/domain/asset-image/asset-image.model.ts":
/*!************************************************************!*\
  !*** ./src/server/domain/asset-image/asset-image.model.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
let AssetImage = class AssetImage extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], AssetImage.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], AssetImage.prototype, "assetId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AssetImage.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AssetImage.prototype, "path", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], AssetImage.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], AssetImage.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], AssetImage.prototype, "updatedAt", void 0);
AssetImage = __decorate([
    sequelize_typescript_1.Table({ modelName: 'asset-image' })
], AssetImage);
exports.AssetImage = AssetImage;


/***/ }),

/***/ "./src/server/domain/asset/asset.model.ts":
/*!************************************************!*\
  !*** ./src/server/domain/asset/asset.model.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const user_model_1 = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
const token_model_1 = __webpack_require__(/*! @domain/token/token.model */ "./src/server/domain/token/token.model.ts");
var AssetType;
(function (AssetType) {
    AssetType["FUNCTIONAL"] = "FUNCTIONAL";
    AssetType["INTEREST"] = "INTEREST";
})(AssetType = exports.AssetType || (exports.AssetType = {}));
var Country;
(function (Country) {
    Country["KR"] = "KR";
})(Country = exports.Country || (exports.Country = {}));
let Asset = class Asset extends sequelize_typescript_1.Model {
    setTotalInvestAmount(amount) {
        this.totalInvestAmount = amount;
    }
    setTotalThisMonthRevenue(amount) {
        this.totalThisMonthRevenue = amount;
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Asset.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, comment: '소유한 유저의 아이디' }),
    __metadata("design:type", Number)
], Asset.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => token_model_1.Token),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, comment: '어셋에 발급된 토큰 아이디' }),
    __metadata("design:type", Number)
], Asset.prototype, "tokenId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Asset.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Asset.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, comment: '배당금이 지급되는 일자 ex) 4' }),
    __metadata("design:type", Number)
], Asset.prototype, "allocationDate", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Asset.prototype, "country", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Asset.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Asset.prototype, "minInterest", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Asset.prototype, "maxInterest", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, comment: '최소 투자자의 수' }),
    __metadata("design:type", Number)
], Asset.prototype, "minInvestor", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, comment: '최대 투자자의 수' }),
    __metadata("design:type", Number)
], Asset.prototype, "maxInvestor", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Asset.prototype, "totalSoftCap", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Asset.prototype, "totalHardCap", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], Asset.prototype, "startAt", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], Asset.prototype, "endAt", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, comment: '해당 자산의 커버이미지 경로' }),
    __metadata("design:type", String)
], Asset.prototype, "coverImgPath", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Asset.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Asset.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User),
    __metadata("design:type", user_model_1.User)
], Asset.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => token_model_1.Token),
    __metadata("design:type", token_model_1.Token)
], Asset.prototype, "token", void 0);
Asset = __decorate([
    sequelize_typescript_1.DefaultScope({ include: [{ model: () => token_model_1.Token }] }),
    sequelize_typescript_1.Table({ modelName: 'asset' })
], Asset);
exports.Asset = Asset;


/***/ }),

/***/ "./src/server/domain/category/category.model.ts":
/*!******************************************************!*\
  !*** ./src/server/domain/category/category.model.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
let Category = class Category extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Category.prototype, "depth1", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Category.prototype, "depth2", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Category.prototype, "depth3", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], Category.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], Category.prototype, "updatedAt", void 0);
Category = __decorate([
    sequelize_typescript_1.Table({ modelName: 'category' })
], Category);
exports.Category = Category;


/***/ }),

/***/ "./src/server/domain/connected-account/connected-account.model.ts":
/*!************************************************************************!*\
  !*** ./src/server/domain/connected-account/connected-account.model.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const user_model_1 = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
class SplashAccount {
    constructor(phone) {
        this.phone = phone;
    }
}
exports.SplashAccount = SplashAccount;
var PlatformType;
(function (PlatformType) {
    PlatformType["SPLASH"] = "SPLASH";
})(PlatformType = exports.PlatformType || (exports.PlatformType = {}));
let ConnectedAccount = class ConnectedAccount extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ConnectedAccount.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ConnectedAccount.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ENUM({ values: Object.keys(PlatformType) }) }),
    __metadata("design:type", String)
], ConnectedAccount.prototype, "platformType", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.JSON }),
    __metadata("design:type", SplashAccount)
], ConnectedAccount.prototype, "value", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], ConnectedAccount.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], ConnectedAccount.prototype, "updatedAt", void 0);
ConnectedAccount = __decorate([
    sequelize_typescript_1.Table({ modelName: 'connected-account' })
], ConnectedAccount);
exports.ConnectedAccount = ConnectedAccount;


/***/ }),

/***/ "./src/server/domain/connected-account/connected-account.service.ts":
/*!**************************************************************************!*\
  !*** ./src/server/domain/connected-account/connected-account.service.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connected_account_model_1 = __webpack_require__(/*! @domain/connected-account/connected-account.model */ "./src/server/domain/connected-account/connected-account.model.ts");
class ConnectedAccountService {
    constructor(connectedAccountRepository) {
        this.connectedAccountRepository = connectedAccountRepository;
        this.connectedAccountRepository = connectedAccountRepository;
    }
    createSplashAccount(userId, phone) {
        return __awaiter(this, void 0, void 0, function* () {
            let connectedAccount = new connected_account_model_1.ConnectedAccount();
            connectedAccount.userId = userId;
            connectedAccount.platformType = connected_account_model_1.PlatformType.SPLASH;
            connectedAccount.value = new connected_account_model_1.SplashAccount(phone);
            return yield this.connectedAccountRepository.save(connectedAccount);
        });
    }
}
exports.ConnectedAccountService = ConnectedAccountService;


/***/ }),

/***/ "./src/server/domain/coupon/coupon.model.ts":
/*!**************************************************!*\
  !*** ./src/server/domain/coupon/coupon.model.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const asset_model_1 = __webpack_require__(/*! @domain/asset/asset.model */ "./src/server/domain/asset/asset.model.ts");
const user_model_1 = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
let Coupon = class Coupon extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Coupon.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: 'The Id of the user who published coupon'
    }),
    __metadata("design:type", Number)
], Coupon.prototype, "publisher", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Coupon.prototype, "receiver", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Coupon.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => asset_model_1.Asset),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Coupon.prototype, "assetId", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: 'The amount of ratio to be applied to receiver when transaction happens'
    }),
    __metadata("design:type", Number)
], Coupon.prototype, "amount", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Coupon.prototype, "creatdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Coupon.prototype, "updatedAt", void 0);
Coupon = __decorate([
    sequelize_typescript_1.Table({ modelName: 'coupon' })
], Coupon);
exports.Coupon = Coupon;


/***/ }),

/***/ "./src/server/domain/ethereum-config/ethereum-config.model.ts":
/*!********************************************************************!*\
  !*** ./src/server/domain/ethereum-config/ethereum-config.model.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
let EthereumConfig = class EthereumConfig extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], EthereumConfig.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], EthereumConfig.prototype, "key", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], EthereumConfig.prototype, "value", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], EthereumConfig.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], EthereumConfig.prototype, "updatedAt", void 0);
EthereumConfig = __decorate([
    sequelize_typescript_1.Table({ modelName: 'ethereum-config' })
], EthereumConfig);
exports.EthereumConfig = EthereumConfig;


/***/ }),

/***/ "./src/server/domain/exchange-rate/exchange-rate.model.ts":
/*!****************************************************************!*\
  !*** ./src/server/domain/exchange-rate/exchange-rate.model.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
let ExchangeRate = class ExchangeRate extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ExchangeRate.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ExchangeRate.prototype, "assetId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ExchangeRate.prototype, "tokenId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ExchangeRate.prototype, "ratio", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], ExchangeRate.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], ExchangeRate.prototype, "updatedAt", void 0);
ExchangeRate = __decorate([
    sequelize_typescript_1.Table({ modelName: 'exchange-rate' })
], ExchangeRate);
exports.ExchangeRate = ExchangeRate;


/***/ }),

/***/ "./src/server/domain/external-wallet/external-wallet.model.ts":
/*!********************************************************************!*\
  !*** ./src/server/domain/external-wallet/external-wallet.model.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
let ExternalWallet = class ExternalWallet extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], ExternalWallet.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], ExternalWallet.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], ExternalWallet.prototype, "balance", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], ExternalWallet.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], ExternalWallet.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], ExternalWallet.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], ExternalWallet.prototype, "updatedAt", void 0);
ExternalWallet = __decorate([
    sequelize_typescript_1.Table({ modelName: 'external-wallet' })
], ExternalWallet);
exports.ExternalWallet = ExternalWallet;


/***/ }),

/***/ "./src/server/domain/monthly-asset-info/monthly-asset-info.model.ts":
/*!**************************************************************************!*\
  !*** ./src/server/domain/monthly-asset-info/monthly-asset-info.model.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const asset_model_1 = __webpack_require__(/*! @domain/asset/asset.model */ "./src/server/domain/asset/asset.model.ts");
let MonthlyAssetInfo = class MonthlyAssetInfo extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MonthlyAssetInfo.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => asset_model_1.Asset),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MonthlyAssetInfo.prototype, "assetId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MonthlyAssetInfo.prototype, "salesAmount", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MonthlyAssetInfo.prototype, "taxAmount", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MonthlyAssetInfo.prototype, "operationFee", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], MonthlyAssetInfo.prototype, "revenue", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], MonthlyAssetInfo.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], MonthlyAssetInfo.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => asset_model_1.Asset),
    __metadata("design:type", asset_model_1.Asset)
], MonthlyAssetInfo.prototype, "asset", void 0);
MonthlyAssetInfo = __decorate([
    sequelize_typescript_1.Table({ modelName: 'monthly-asset-info', underscored: true })
], MonthlyAssetInfo);
exports.MonthlyAssetInfo = MonthlyAssetInfo;


/***/ }),

/***/ "./src/server/domain/monthly-asset-info/monthly-asset-info.service.ts":
/*!****************************************************************************!*\
  !*** ./src/server/domain/monthly-asset-info/monthly-asset-info.service.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize = __webpack_require__(/*! sequelize */ "sequelize");
class MonthlyAssetInfoService {
    constructor(monthlyAssetInfoRepository) {
        this.monthlyAssetInfoRepository = monthlyAssetInfoRepository;
        this.monthlyAssetInfoRepository = monthlyAssetInfoRepository;
    }
    getThisMonthRevenue(asset) {
        return __awaiter(this, void 0, void 0, function* () {
            let thisYear = new Date().getFullYear();
            let thisMonth = new Date().getMonth() + 1;
            let startDate;
            if (thisMonth === 1) {
                startDate = new Date(thisYear + '-' + (thisMonth - 1) + '-' + asset.allocationDate);
            }
            else {
                startDate = new Date(thisYear - 1 + '-' + 12 + '-' + asset.allocationDate);
            }
            let endDate = new Date(thisYear + '-' + thisMonth + '-' + asset.allocationDate);
            console.log('#####', asset);
            let _ = yield this.monthlyAssetInfoRepository.findAll({
                where: {
                    createdAt: {
                        [sequelize.Op.gt]: startDate,
                        [sequelize.Op.lt]: endDate
                    }
                }
            });
            if (_.length === 0)
                return 0;
            return _[0].revenue;
        });
    }
}
exports.MonthlyAssetInfoService = MonthlyAssetInfoService;


/***/ }),

/***/ "./src/server/domain/order/order.model.ts":
/*!************************************************!*\
  !*** ./src/server/domain/order/order.model.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const applied_coupon_model_1 = __webpack_require__(/*! ../applied-coupon/applied-coupon.model */ "./src/server/domain/applied-coupon/applied-coupon.model.ts");
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const user_model_1 = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
const sales_model_1 = __webpack_require__(/*! @domain/sales/sales.model */ "./src/server/domain/sales/sales.model.ts");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["WAIT"] = "WAIT";
    OrderStatus["COMPLETE"] = "COMPLETE";
    OrderStatus["EXPIRED"] = "EXPIRED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
let Order = class Order extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Order.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => sales_model_1.Sales),
    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Order.prototype, "salesId", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.ENUM({ values: Object.keys(OrderStatus) }),
        comment: '주문의 상태'
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Order.prototype, "hash", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: '실제 고객이 구매한 금액으로 소수점 문제로 실가격에서 할인된 금액이다.'
    }),
    __metadata("design:type", Number)
], Order.prototype, "purchasePrice", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], Order.prototype, "tokenAmount", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], Order.prototype, "purchaseCurrency", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], Order.prototype, "tokenId", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Order.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => applied_coupon_model_1.AppliedCoupon),
    __metadata("design:type", Array)
], Order.prototype, "appliedCoupons", void 0);
Order = __decorate([
    sequelize_typescript_1.DefaultScope({ include: [() => applied_coupon_model_1.AppliedCoupon] }),
    sequelize_typescript_1.Table({ modelName: 'order', underscored: true })
], Order);
exports.Order = Order;


/***/ }),

/***/ "./src/server/domain/pocket/pocket.model.ts":
/*!**************************************************!*\
  !*** ./src/server/domain/pocket/pocket.model.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const user_model_1 = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
const external_wallet_model_1 = __webpack_require__(/*! @domain/external-wallet/external-wallet.model */ "./src/server/domain/external-wallet/external-wallet.model.ts");
const wallet_model_1 = __webpack_require__(/*! @domain/wallet/wallet.model */ "./src/server/domain/wallet/wallet.model.ts");
var SelectedColumn;
(function (SelectedColumn) {
    SelectedColumn["externalWalletId"] = "externalWalletId";
    SelectedColumn["walletId"] = "walletId";
})(SelectedColumn = exports.SelectedColumn || (exports.SelectedColumn = {}));
/**
 * @swagger
 * definitions:
 *   Sample:
 *     type: object
 *     required:
 *       - id
 *     properties:
 *       id:
 *         type: string
 */
let Pocket = class Pocket extends sequelize_typescript_1.Model {
    /**
     * @swagger
     * definitions:
     *   Sample:
     *     type: object
     *     required:
     *       - id
     *     properties:
     *       id:
     *         type: string
     */
    constructor() {
        super(...arguments);
        this.id = 0;
        this.userId = 0;
        this.externalWalletId = 0;
        this.walletId = 0;
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Pocket.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ENUM({ values: Object.keys(SelectedColumn) }) }),
    __metadata("design:type", String)
], Pocket.prototype, "selectedColumn", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Pocket.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => external_wallet_model_1.ExternalWallet),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Pocket.prototype, "externalWalletId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => wallet_model_1.Wallet),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Pocket.prototype, "walletId", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Pocket.prototype, "createdAt", void 0);
Pocket = __decorate([
    sequelize_typescript_1.Table({ modelName: 'pocket' })
], Pocket);
exports.Pocket = Pocket;


/***/ }),

/***/ "./src/server/domain/pocket/pocket.service.ts":
/*!****************************************************!*\
  !*** ./src/server/domain/pocket/pocket.service.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pocket_model_1 = __webpack_require__(/*! @domain/pocket/pocket.model */ "./src/server/domain/pocket/pocket.model.ts");
const CustomError_1 = __webpack_require__(/*! @common/models/CustomError */ "./src/server/common/models/CustomError.ts");
const HttpErrCode_1 = __webpack_require__(/*! @common/constants/HttpErrCode */ "./src/server/common/constants/HttpErrCode.ts");
class PocketService {
    constructor(pocketRepository) {
        this.pocketRepository = pocketRepository;
        this.pocketRepository = pocketRepository;
    }
    createPocketForWallet(userId, walletId) {
        return __awaiter(this, void 0, void 0, function* () {
            let pockets = yield this.pocketRepository.findAll({
                where: { userId, walletId }
            });
            if (pockets.length !== 0)
                throw new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.CREATE_POCKET.ALREADY_EXIST, '이미 해당 지갑에 대한 포켓이 존재합니다.');
            let pocket = new pocket_model_1.Pocket();
            Object.assign(pocket, {
                selectedColumn: pocket_model_1.SelectedColumn.walletId,
                userId,
                walletId
            });
            return this.pocketRepository.save(pocket);
        });
    }
}
exports.PocketService = PocketService;


/***/ }),

/***/ "./src/server/domain/reward/reward.model.ts":
/*!**************************************************!*\
  !*** ./src/server/domain/reward/reward.model.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const order_model_1 = __webpack_require__(/*! @domain/order/order.model */ "./src/server/domain/order/order.model.ts");
const asset_model_1 = __webpack_require__(/*! @domain/asset/asset.model */ "./src/server/domain/asset/asset.model.ts");
const sales_model_1 = __webpack_require__(/*! @domain/sales/sales.model */ "./src/server/domain/sales/sales.model.ts");
const user_model_1 = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
var RewardStatus;
(function (RewardStatus) {
    RewardStatus["COMPLETED"] = "COMPLETED";
    RewardStatus["PENDING"] = "PENDING";
})(RewardStatus = exports.RewardStatus || (exports.RewardStatus = {}));
/**
 * 리워드 테이블은 보내지기 위한 내역들이 기록되는 공간이다.
 * 모든 데이터를 배치서버에 의해 매달 보내야할 리워드 정보들이 기록되며 상태는 pending 상태이다.
 * 리워드 데이터가 전송이 완료된 이후에는 상태가 completed로 변경되게 된다.
 *
 * 리워드 데이터에서의 amount 는 모든 쿠폰이 적용된 이후의 값이 적용되며 리워드를 전송한다면 그냥 해당 amount 만큼 이체되면 된다.
 */
let Reward = class Reward extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Reward.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ENUM({ values: Object.keys(RewardStatus) }) }),
    __metadata("design:type", String)
], Reward.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Reward.prototype, "from", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Reward.prototype, "to", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => sales_model_1.Sales),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Reward.prototype, "salesId", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => asset_model_1.Asset),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Reward.prototype, "assetId", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => order_model_1.Order),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Reward.prototype, "orderId", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: '지급될 BWX의 양으로 지급일 당일에 체워진다.'
    }),
    __metadata("design:type", Number)
], Reward.prototype, "amount", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Reward.prototype, "currency", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Reward.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Reward.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => order_model_1.Order),
    __metadata("design:type", order_model_1.Order)
], Reward.prototype, "order", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => sales_model_1.Sales),
    __metadata("design:type", sales_model_1.Sales)
], Reward.prototype, "sales", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => user_model_1.User),
    __metadata("design:type", Object)
], Reward.prototype, "toUser", void 0);
Reward = __decorate([
    sequelize_typescript_1.DefaultScope({
        include: [
            { model: () => sales_model_1.Sales },
            { model: () => user_model_1.User, attributes: ['name', 'walletAddress'] },
            { model: () => order_model_1.Order }
        ]
    }),
    sequelize_typescript_1.Table({ modelName: 'reward' })
], Reward);
exports.Reward = Reward;


/***/ }),

/***/ "./src/server/domain/sales-proposal/sales-proposal.model.ts":
/*!******************************************************************!*\
  !*** ./src/server/domain/sales-proposal/sales-proposal.model.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const sales_model_1 = __webpack_require__(/*! @domain/sales/sales.model */ "./src/server/domain/sales/sales.model.ts");
let SalesProposal = class SalesProposal extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], SalesProposal.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    sequelize_typescript_1.ForeignKey(() => sales_model_1.Sales),
    __metadata("design:type", Number)
], SalesProposal.prototype, "salesId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], SalesProposal.prototype, "lang", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], SalesProposal.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], SalesProposal.prototype, "content", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], SalesProposal.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], SalesProposal.prototype, "updatedAt", void 0);
SalesProposal = __decorate([
    sequelize_typescript_1.Table({ modelName: 'sales-proposal' })
], SalesProposal);
exports.SalesProposal = SalesProposal;


/***/ }),

/***/ "./src/server/domain/sales/sales.model.ts":
/*!************************************************!*\
  !*** ./src/server/domain/sales/sales.model.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const Currency_1 = __webpack_require__(/*! @common/models/Currency */ "./src/server/common/models/Currency.ts");
const asset_model_1 = __webpack_require__(/*! @domain/asset/asset.model */ "./src/server/domain/asset/asset.model.ts");
// 세일즈는 특정 asset에 대한 판매형태를 의미한다.
// 하나의 asset은 차수로 나누어져 sales의 형태로 판매되며, 본 sales 에는 차수와 가격 softcap, hardcap 이 포함된다.
// 즉, 어떤 asset에 얼마만큼의 cap 이 존재하고 얼마만큼의 리워드를 얻을 수 있는지에 대한 정보이다.
var SalesStatus;
(function (SalesStatus) {
    SalesStatus["ACTIVE"] = "ACTIVE";
    SalesStatus["INACTIVE"] = "INACTIVE";
})(SalesStatus = exports.SalesStatus || (exports.SalesStatus = {}));
let Sales = class Sales extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Sales.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.ForeignKey(() => asset_model_1.Asset),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Sales.prototype, "assetId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ENUM({ values: Object.keys(SalesStatus) }) }),
    __metadata("design:type", String)
], Sales.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Sales.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, comment: '구매하는 현금가격' }),
    __metadata("design:type", Number)
], Sales.prototype, "fiatPrice", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ENUM({ values: Object.keys(Currency_1.Currency) }) }),
    __metadata("design:type", String)
], Sales.prototype, "fiatCurrency", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.FLOAT,
        comment: 'The amount of interest which should be distributed later 0~1'
    }),
    __metadata("design:type", Number)
], Sales.prototype, "interestAmount", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Sales.prototype, "softCap", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Sales.prototype, "hardCap", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Sales.prototype, "individualSoftCap", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Sales.prototype, "individualHardCap", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: 'The minimum number of investors'
    }),
    __metadata("design:type", Number)
], Sales.prototype, "minInvestor", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        comment: 'The maximum number of investors'
    }),
    __metadata("design:type", Number)
], Sales.prototype, "maxInvestor", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE,
        comment: 'The start date of this sales'
    }),
    __metadata("design:type", Date)
], Sales.prototype, "startAt", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.DATE,
        comment: 'The end date of this sales'
    }),
    __metadata("design:type", Date)
], Sales.prototype, "endAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => asset_model_1.Asset),
    __metadata("design:type", asset_model_1.Asset)
], Sales.prototype, "asset", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], Sales.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], Sales.prototype, "updatedAt", void 0);
Sales = __decorate([
    sequelize_typescript_1.DefaultScope({ include: [{ model: () => asset_model_1.Asset }] }),
    sequelize_typescript_1.Table({ modelName: 'sales' })
], Sales);
exports.Sales = Sales;


/***/ }),

/***/ "./src/server/domain/token/token.model.ts":
/*!************************************************!*\
  !*** ./src/server/domain/token/token.model.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const asset_model_1 = __webpack_require__(/*! @domain/asset/asset.model */ "./src/server/domain/asset/asset.model.ts");
let Token = class Token extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Token.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Token.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Token.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => asset_model_1.Asset),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Token.prototype, "assetId", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Token.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, comment: '토큰의 심볼' }),
    __metadata("design:type", String)
], Token.prototype, "symbol", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Token.prototype, "decimals", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Token.prototype, "totalSupply", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Token.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Token.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Token.prototype, "updatedAt", void 0);
Token = __decorate([
    sequelize_typescript_1.Table({ modelName: 'token' })
], Token);
exports.Token = Token;


/***/ }),

/***/ "./src/server/domain/transaction/transaction.model.ts":
/*!************************************************************!*\
  !*** ./src/server/domain/transaction/transaction.model.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const asset_model_1 = __webpack_require__(/*! @domain/asset/asset.model */ "./src/server/domain/asset/asset.model.ts");
const order_model_1 = __webpack_require__(/*! @domain/order/order.model */ "./src/server/domain/order/order.model.ts");
const user_model_1 = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
const pocket_model_1 = __webpack_require__(/*! @domain/pocket/pocket.model */ "./src/server/domain/pocket/pocket.model.ts");
var TransactionType;
(function (TransactionType) {
    TransactionType["PAYMENT"] = "PAYMENT";
    TransactionType["INTEREST"] = "INTEREST";
    TransactionType["BONUS"] = "BONUS";
    TransactionType["WITHDRAW"] = "WITHDRAW";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PENDING"] = "PENDING";
    TransactionStatus["COMPLETE"] = "COMPLETE";
    TransactionStatus["FAIL"] = "FAIL";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
let Transaction = class Transaction extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Transaction.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => order_model_1.Order),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Transaction.prototype, "orderId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => asset_model_1.Asset),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Transaction.prototype, "assetId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ENUM({ values: Object.keys(TransactionType) }) }),
    __metadata("design:type", String)
], Transaction.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ENUM({ values: Object.keys(TransactionStatus) }) }),
    __metadata("design:type", String)
], Transaction.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Transaction.prototype, "fromUserId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => user_model_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Transaction.prototype, "toUserId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => pocket_model_1.Pocket),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Transaction.prototype, "fromPocketId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => pocket_model_1.Pocket),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Transaction.prototype, "toPocketId", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Transaction.prototype, "currency", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Transaction.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Transaction.prototype, "updatedAt", void 0);
Transaction = __decorate([
    sequelize_typescript_1.Table({ modelName: 'transaction' })
], Transaction);
exports.Transaction = Transaction;


/***/ }),

/***/ "./src/server/domain/user/user.model.ts":
/*!**********************************************!*\
  !*** ./src/server/domain/user/user.model.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
const bcrypt = __importStar(__webpack_require__(/*! bcryptjs */ "bcryptjs"));
const connected_account_model_1 = __webpack_require__(/*! @domain/connected-account/connected-account.model */ "./src/server/domain/connected-account/connected-account.model.ts");
const pocket_model_1 = __webpack_require__(/*! @domain/pocket/pocket.model */ "./src/server/domain/pocket/pocket.model.ts");
var UserPermission;
(function (UserPermission) {
    UserPermission["ADMIN"] = "ADMIN";
    UserPermission["GENERAL"] = "GENERAL";
    UserPermission["SELLER"] = "SELLER";
})(UserPermission = exports.UserPermission || (exports.UserPermission = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["INACTIVE"] = "INACTIVE";
    UserStatus["UNAUTHORIZED"] = "UNAUTHORIZED";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
var KYCStatus;
(function (KYCStatus) {
    KYCStatus["VALID"] = "VALID";
    KYCStatus["INVALID"] = "INVALID";
})(KYCStatus = exports.KYCStatus || (exports.KYCStatus = {}));
let User = class User extends sequelize_typescript_1.Model {
    comparePassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
    setEmail(email) {
        this.email = email;
    }
    setPassword(password) {
        this.password = password;
    }
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Default(UserPermission.GENERAL),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        values: Object.keys(UserPermission)
    }),
    __metadata("design:type", String)
], User.prototype, "permission", void 0);
__decorate([
    sequelize_typescript_1.Default(UserStatus.UNAUTHORIZED),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.ENUM({ values: Object.keys(UserStatus) }) }),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        comment: '유저의 핸드폰 번호로 "+82 01012341234" 와 같은 형태를 가진다.'
    }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        comment: '유저의 생년월일로 1992-04-30 과 같은 형태를 가진다.'
    }),
    __metadata("design:type", String)
], User.prototype, "birthday", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        values: Object.keys(KYCStatus)
    }),
    __metadata("design:type", String)
], User.prototype, "KYCStatus", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        comment: '구글 otp 등의 otp 활용하기 위해서 '
    }),
    __metadata("design:type", String)
], User.prototype, "OAuthKey", void 0);
__decorate([
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING,
        comment: '이메일 인증 코드'
    }),
    __metadata("design:type", String)
], User.prototype, "emailVerificationCode", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => connected_account_model_1.ConnectedAccount),
    __metadata("design:type", Array)
], User.prototype, "connectedAccounts", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => pocket_model_1.Pocket),
    __metadata("design:type", Array)
], User.prototype, "pockets", void 0);
User = __decorate([
    sequelize_typescript_1.DefaultScope({
        order: [['createdAt', 'DESC']],
        include: [{ model: () => connected_account_model_1.ConnectedAccount }, { model: () => pocket_model_1.Pocket }]
    }),
    sequelize_typescript_1.Table({ modelName: 'user', underscored: true })
], User);
exports.User = User;


/***/ }),

/***/ "./src/server/domain/user/user.service.ts":
/*!************************************************!*\
  !*** ./src/server/domain/user/user.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
const CustomError_1 = __webpack_require__(/*! @common/models/CustomError */ "./src/server/common/models/CustomError.ts");
const HttpErrCode_1 = __webpack_require__(/*! @common/constants/HttpErrCode */ "./src/server/common/constants/HttpErrCode.ts");
class UserService {
    constructor(userRepository, pocketService, walletService) {
        this.userRepository = userRepository;
        this.pocketService = pocketService;
        this.walletService = walletService;
        (this.userRepository = userRepository),
            (this.pocketService = pocketService),
            (this.walletService = walletService);
    }
    /**
     * 유저와 유저의 최초 포켓을 만들어 주는 함수이다.
     *
     * @param phone 유저의 핸드폰 번호
     * @param firstName 유저의 이름(성과 이름이 구분이 안된다면 그냥 전부 firstName에 넣는다.)
     * @param birthday 유저의 생일로 1992-04-30 과 같은 양식을 가진다.
     */
    createUser(phone, firstName, birthday, status) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('found users', phone, firstName, birthday, status);
            let users = yield this.userRepository.findAll({
                where: { phone, birthday, status: user_model_1.UserStatus.ACTIVE }
            });
            if (users.length !== 0)
                throw new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.REGISTER.EXIST_PHONE, '해당 핸드폰 번호로 가입된 유저가 있습니다.');
            let user = new user_model_1.User({ phone, birthday, firstName, status });
            let createdUser = yield this.userRepository.save(user);
            let wallet = yield this.walletService.popWallet();
            yield this.pocketService.createPocketForWallet(createdUser.id, wallet.id);
            let result = yield this.userRepository.findById(createdUser.id);
            return result;
        });
    }
}
exports.UserService = UserService;


/***/ }),

/***/ "./src/server/domain/wallet/wallet.model.ts":
/*!**************************************************!*\
  !*** ./src/server/domain/wallet/wallet.model.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
let Wallet = class Wallet extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Unique,
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Wallet.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Default(0),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER, comment: '현재 유저의 잔고입니다.' }),
    __metadata("design:type", Number)
], Wallet.prototype, "balance", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Wallet.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.BOOLEAN }),
    __metadata("design:type", Boolean)
], Wallet.prototype, "available", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], Wallet.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], Wallet.prototype, "updatedAt", void 0);
Wallet = __decorate([
    sequelize_typescript_1.Table({ modelName: 'wallet' })
], Wallet);
exports.Wallet = Wallet;


/***/ }),

/***/ "./src/server/domain/wallet/wallet.service.ts":
/*!****************************************************!*\
  !*** ./src/server/domain/wallet/wallet.service.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __webpack_require__(/*! @common/models/CustomError */ "./src/server/common/models/CustomError.ts");
const HttpErrCode_1 = __webpack_require__(/*! @common/constants/HttpErrCode */ "./src/server/common/constants/HttpErrCode.ts");
class WalletService {
    constructor(walletRepository) {
        this.walletRepository = walletRepository;
        this.walletRepository = walletRepository;
    }
    popWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            let wallets = yield this.walletRepository.findAll({
                where: { available: true }
            });
            if (wallets.length === 0) {
                throw new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.REGISTER.NO_AVAILABLE_WALLET, '사용 가능한 지갑이 없습니다.');
            }
            let wallet = wallets[0];
            wallet.available = false;
            yield this.walletRepository.save(wallet);
            return wallet;
        });
    }
}
exports.WalletService = WalletService;


/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __webpack_require__(/*! server/App */ "./src/server/App.ts");
const app = new App_1.App();
app.start();


/***/ }),

/***/ "./src/server/infra/guard/api.guard.ts":
/*!*********************************************!*\
  !*** ./src/server/infra/guard/api.guard.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __webpack_require__(/*! @common/models/CustomError */ "./src/server/common/models/CustomError.ts");
const HttpErrCode_1 = __webpack_require__(/*! @common/constants/HttpErrCode */ "./src/server/common/constants/HttpErrCode.ts");
const authenticator_1 = __webpack_require__(/*! @utils/authenticator */ "./src/server/utils/authenticator.ts");
const api_user_repository_impl_1 = __webpack_require__(/*! @infra/sequelizejs/mysql/repositories/api-user.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/api-user.repository.impl.ts");
function apiGuard(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let jwt = args[0].cookies['sa-jwt'];
                if (!jwt)
                    return args[2](new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.JWT.NO_TOKEN, 'jwt 토큰이 없습니다.'));
                let user = yield extractUserFromJwt(jwt);
                args.push(user);
                let result = originalMethod.apply(this, args);
                return result;
            }
            catch (err) {
                return args[2](err);
            }
        });
    };
    return descriptor;
}
exports.apiGuard = apiGuard;
const extractUserFromJwt = (jwt) => __awaiter(this, void 0, void 0, function* () {
    let apiUserRepository = new api_user_repository_impl_1.ApiUserRepositoryImpl();
    let decoded = authenticator_1.decodeJwt(jwt);
    console.log('Decoded: ', decoded);
    let user = yield apiUserRepository.findById(decoded.user.id);
    if (!user)
        throw new Error(HttpErrCode_1.HttpErrCode.API.NO_USER);
    return user;
});


/***/ }),

/***/ "./src/server/infra/guard/auth.guard.ts":
/*!**********************************************!*\
  !*** ./src/server/infra/guard/auth.guard.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = __webpack_require__(/*! @infra/sequelizejs/mysql/repositories */ "./src/server/infra/sequelizejs/mysql/repositories/index.ts");
const authenticator_1 = __webpack_require__(/*! @utils/authenticator */ "./src/server/utils/authenticator.ts");
const HttpErrCode_1 = __webpack_require__(/*! @common/constants/HttpErrCode */ "./src/server/common/constants/HttpErrCode.ts");
const CustomError_1 = __webpack_require__(/*! @common/models/CustomError */ "./src/server/common/models/CustomError.ts");
function authGuard(target, propertyKey, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(args[0].cookies);
                let jwt = args[0].cookies.jwtToken;
                console.log('jwt: ', jwt);
                if (!jwt)
                    return args[2](new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.JWT.NO_TOKEN, 'jwt 토큰이 없습니다.'));
                let user = yield extractUserFromJwt(jwt);
                args.push(user);
                let result = originalMethod.apply(this, args);
                return result;
            }
            catch (err) {
                console.log(args[2]);
                return args[2](err);
            }
        });
    };
    return descriptor;
}
exports.authGuard = authGuard;
const extractUserFromJwt = (jwt) => __awaiter(this, void 0, void 0, function* () {
    let userRepository = new repositories_1.UserRepositoryImpl();
    let decoded = authenticator_1.decodeJwt(jwt);
    let users = yield userRepository.findAll({
        where: { id: decoded.user.id },
        raw: true
    });
    if (users.length === 0)
        throw new Error(HttpErrCode_1.HttpErrCode.LOGIN.NO_USER);
    return users[0];
});


/***/ }),

/***/ "./src/server/infra/middleware/errorHandlers.ts":
/*!******************************************************!*\
  !*** ./src/server/infra/middleware/errorHandlers.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HttpErrCode_1 = __webpack_require__(/*! @common/constants/HttpErrCode */ "./src/server/common/constants/HttpErrCode.ts");
exports.notFoundErrorHandler = (req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
};
exports.domainErrHandler = (err, req, res, next) => {
    let { status, message, code } = err;
    res.status(err.status || 400);
    // Parse Joi Error
    let msg = extractMessageFromCode(err);
    msg = extractFromJoiMessage(message);
    res.send({
        error: {
            message: msg,
            code: err.code
        }
    });
};
const extractMessageFromCode = (err) => {
    let msg = err.message;
    switch (err.code) {
        case HttpErrCode_1.HttpErrCode.VERIFY_EMAIL.INVALID_CODE: {
            msg = '유효하지 않은 코드입니다.';
        }
    }
    return msg;
};
const extractFromJoiMessage = (message) => {
    if (!message)
        return message;
    let msg = message;
    // Joi Error
    if (message.match(/child.*.fails.because.*.is not allowed to be empty/)) {
        let word = extractFromQuotedWord(message);
        msg = `${word} 값이 입력되지 않았습니다.`;
    }
    if (message.match(/child.*.fails because.*.is required]/)) {
        let word = extractFromQuotedWord(message);
        msg = `${word} 값은 필수로 입력되어야 합니다.`;
    }
    if (message.match(/child.*.fails because.*.must be a valid email]/)) {
        msg = `올바른 이메일 형식이 아닙니다.`;
    }
    return msg;
};
const extractFromQuotedWord = (message) => {
    if (message.match(/".+?"/g)) {
        let quotedWord = message.match(/".+?"/g)[0];
        let word = quotedWord.split('"')[1];
        return word;
    }
    return message;
};


/***/ }),

/***/ "./src/server/infra/middleware/headerSetter.ts":
/*!*****************************************************!*\
  !*** ./src/server/infra/middleware/headerSetter.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.headerSetter = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/index.js":
/*!*****************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/index.js ***!
  \*****************************************************/
/*! exports provided: sequelizeModels, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequelizeModels", function() { return sequelizeModels; });
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize-typescript */ "sequelize-typescript");
/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _domain_user_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
/* harmony import */ var _domain_user_user_model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_domain_user_user_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _domain_transaction_transaction_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @domain/transaction/transaction.model */ "./src/server/domain/transaction/transaction.model.ts");
/* harmony import */ var _domain_transaction_transaction_model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_domain_transaction_transaction_model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _domain_asset_asset_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @domain/asset/asset.model */ "./src/server/domain/asset/asset.model.ts");
/* harmony import */ var _domain_asset_asset_model__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_domain_asset_asset_model__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _domain_asset_image_asset_image_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @domain/asset-image/asset-image.model */ "./src/server/domain/asset-image/asset-image.model.ts");
/* harmony import */ var _domain_asset_image_asset_image_model__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_domain_asset_image_asset_image_model__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _domain_asset_desc_asset_desc_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @domain/asset-desc/asset-desc.model */ "./src/server/domain/asset-desc/asset-desc.model.ts");
/* harmony import */ var _domain_asset_desc_asset_desc_model__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_domain_asset_desc_asset_desc_model__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _domain_applied_coupon_applied_coupon_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @domain/applied-coupon/applied-coupon.model */ "./src/server/domain/applied-coupon/applied-coupon.model.ts");
/* harmony import */ var _domain_applied_coupon_applied_coupon_model__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_domain_applied_coupon_applied_coupon_model__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _domain_category_category_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @domain/category/category.model */ "./src/server/domain/category/category.model.ts");
/* harmony import */ var _domain_category_category_model__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_domain_category_category_model__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _domain_coupon_coupon_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @domain/coupon/coupon.model */ "./src/server/domain/coupon/coupon.model.ts");
/* harmony import */ var _domain_coupon_coupon_model__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_domain_coupon_coupon_model__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _domain_ethereum_config_ethereum_config_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @domain/ethereum-config/ethereum-config.model */ "./src/server/domain/ethereum-config/ethereum-config.model.ts");
/* harmony import */ var _domain_ethereum_config_ethereum_config_model__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_domain_ethereum_config_ethereum_config_model__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _domain_exchange_rate_exchange_rate_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @domain/exchange-rate/exchange-rate.model */ "./src/server/domain/exchange-rate/exchange-rate.model.ts");
/* harmony import */ var _domain_exchange_rate_exchange_rate_model__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_domain_exchange_rate_exchange_rate_model__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _domain_external_wallet_external_wallet_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @domain/external-wallet/external-wallet.model */ "./src/server/domain/external-wallet/external-wallet.model.ts");
/* harmony import */ var _domain_external_wallet_external_wallet_model__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_domain_external_wallet_external_wallet_model__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _domain_order_order_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @domain/order/order.model */ "./src/server/domain/order/order.model.ts");
/* harmony import */ var _domain_order_order_model__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_domain_order_order_model__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _domain_reward_reward_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @domain/reward/reward.model */ "./src/server/domain/reward/reward.model.ts");
/* harmony import */ var _domain_reward_reward_model__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_domain_reward_reward_model__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _domain_sales_sales_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @domain/sales/sales.model */ "./src/server/domain/sales/sales.model.ts");
/* harmony import */ var _domain_sales_sales_model__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_domain_sales_sales_model__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _domain_sales_proposal_sales_proposal_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @domain/sales-proposal/sales-proposal.model */ "./src/server/domain/sales-proposal/sales-proposal.model.ts");
/* harmony import */ var _domain_sales_proposal_sales_proposal_model__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_domain_sales_proposal_sales_proposal_model__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _domain_token_token_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @domain/token/token.model */ "./src/server/domain/token/token.model.ts");
/* harmony import */ var _domain_token_token_model__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_domain_token_token_model__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _domain_monthly_asset_info_monthly_asset_info_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @domain/monthly-asset-info/monthly-asset-info.model */ "./src/server/domain/monthly-asset-info/monthly-asset-info.model.ts");
/* harmony import */ var _domain_monthly_asset_info_monthly_asset_info_model__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_domain_monthly_asset_info_monthly_asset_info_model__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _domain_wallet_wallet_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @domain/wallet/wallet.model */ "./src/server/domain/wallet/wallet.model.ts");
/* harmony import */ var _domain_wallet_wallet_model__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_domain_wallet_wallet_model__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _domain_pocket_pocket_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @domain/pocket/pocket.model */ "./src/server/domain/pocket/pocket.model.ts");
/* harmony import */ var _domain_pocket_pocket_model__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_domain_pocket_pocket_model__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _domain_connected_account_connected_account_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @domain/connected-account/connected-account.model */ "./src/server/domain/connected-account/connected-account.model.ts");
/* harmony import */ var _domain_connected_account_connected_account_model__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_domain_connected_account_connected_account_model__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _domain_api_user_api_user_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @domain/api-user/api-user.model */ "./src/server/domain/api-user/api-user.model.ts");
/* harmony import */ var _domain_api_user_api_user_model__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_domain_api_user_api_user_model__WEBPACK_IMPORTED_MODULE_22__);
























__webpack_require__(/*! dotenv */ "dotenv").config();

var sequelize = new sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__["Sequelize"]({
  database: "shareable",
  username: "root",
  password: "BNeB6sQsBa3kr3BT6yPWq7Dr8",
  port: "14306",
  dialect: "mysql",
  url: "mysql://root:BNeB6sQsBa3kr3BT6yPWq7Dr8@rds-dev-sa.cgf2n2fvnfzp.ap-northeast-2.rds.amazonaws.com:14306/shareable",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
var sequelizeModels = [_domain_applied_coupon_applied_coupon_model__WEBPACK_IMPORTED_MODULE_7__["AppliedCoupon"], _domain_category_category_model__WEBPACK_IMPORTED_MODULE_8__["Category"], _domain_coupon_coupon_model__WEBPACK_IMPORTED_MODULE_9__["Coupon"], _domain_ethereum_config_ethereum_config_model__WEBPACK_IMPORTED_MODULE_10__["EthereumConfig"], _domain_exchange_rate_exchange_rate_model__WEBPACK_IMPORTED_MODULE_11__["ExchangeRate"], _domain_external_wallet_external_wallet_model__WEBPACK_IMPORTED_MODULE_12__["ExternalWallet"], _domain_order_order_model__WEBPACK_IMPORTED_MODULE_13__["Order"], _domain_reward_reward_model__WEBPACK_IMPORTED_MODULE_14__["Reward"], _domain_sales_sales_model__WEBPACK_IMPORTED_MODULE_15__["Sales"], _domain_sales_proposal_sales_proposal_model__WEBPACK_IMPORTED_MODULE_16__["SalesProposal"], _domain_transaction_transaction_model__WEBPACK_IMPORTED_MODULE_3__["Transaction"], _domain_user_user_model__WEBPACK_IMPORTED_MODULE_2__["User"], _domain_asset_asset_model__WEBPACK_IMPORTED_MODULE_4__["Asset"], _domain_asset_image_asset_image_model__WEBPACK_IMPORTED_MODULE_5__["AssetImage"], _domain_asset_desc_asset_desc_model__WEBPACK_IMPORTED_MODULE_6__["AssetDesc"], _domain_monthly_asset_info_monthly_asset_info_model__WEBPACK_IMPORTED_MODULE_18__["MonthlyAssetInfo"], _domain_wallet_wallet_model__WEBPACK_IMPORTED_MODULE_19__["Wallet"], _domain_pocket_pocket_model__WEBPACK_IMPORTED_MODULE_20__["Pocket"], _domain_connected_account_connected_account_model__WEBPACK_IMPORTED_MODULE_21__["ConnectedAccount"], _domain_api_user_api_user_model__WEBPACK_IMPORTED_MODULE_22__["ApiUser"], _domain_token_token_model__WEBPACK_IMPORTED_MODULE_17__["Token"]];
sequelize.addModels(sequelizeModels);
/* harmony default export */ __webpack_exports__["default"] = ({
  sequelize: sequelize
});

/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/api-user.repository.impl.ts":
/*!*************************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/api-user.repository.impl.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_user_model_1 = __webpack_require__(/*! @domain/api-user/api-user.model */ "./src/server/domain/api-user/api-user.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class ApiUserRepositoryImpl {
    constructor() { }
    save(apiUser) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield apiUser.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield api_user_model_1.ApiUser.findAll(filter);
            let datas = yield api_user_model_1.ApiUser.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = yield api_user_model_1.ApiUser.findAll({ where: { id } });
            if (users.length === 0)
                return null;
            return users[0];
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield api_user_model_1.ApiUser.count(filter);
        });
    }
    update(apiUser, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield api_user_model_1.ApiUser.update(apiUser, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield api_user_model_1.ApiUser.destroy(option);
        });
    }
}
exports.ApiUserRepositoryImpl = ApiUserRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/applied-coupon.repository.impl.ts":
/*!*******************************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/applied-coupon.repository.impl.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const applied_coupon_model_1 = __webpack_require__(/*! @domain/applied-coupon/applied-coupon.model */ "./src/server/domain/applied-coupon/applied-coupon.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class AppliedCouponRepositoryImpl {
    constructor() { }
    save(appliedCoupon) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield appliedCoupon.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield applied_coupon_model_1.AppliedCoupon.findAll(filter);
            let datas = yield applied_coupon_model_1.AppliedCoupon.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield applied_coupon_model_1.AppliedCoupon.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield applied_coupon_model_1.AppliedCoupon.count(filter);
        });
    }
    update(appliedCoupon, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield applied_coupon_model_1.AppliedCoupon.update(appliedCoupon, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield applied_coupon_model_1.AppliedCoupon.destroy(option);
        });
    }
}
exports.AppliedCouponRepositoryImpl = AppliedCouponRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/asset-desc.repository.impl.ts":
/*!***************************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/asset-desc.repository.impl.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const asset_desc_model_1 = __webpack_require__(/*! @domain/asset-desc/asset-desc.model */ "./src/server/domain/asset-desc/asset-desc.model.ts");
class AssetDescRepositoryImpl {
    constructor() { }
    save(assetDesc) {
        return __awaiter(this, void 0, void 0, function* () {
            const _ = asset_desc_model_1.AssetDesc.build(assetDesc);
            return yield _.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield asset_desc_model_1.AssetDesc.findAll(filter);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield asset_desc_model_1.AssetDesc.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield asset_desc_model_1.AssetDesc.count(filter);
        });
    }
    update(assetDesc, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield asset_desc_model_1.AssetDesc.update(assetDesc, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield asset_desc_model_1.AssetDesc.destroy(option);
        });
    }
}
exports.AssetDescRepositoryImpl = AssetDescRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/asset-image.repository.impl.ts":
/*!****************************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/asset-image.repository.impl.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const asset_image_model_1 = __webpack_require__(/*! @domain/asset-image/asset-image.model */ "./src/server/domain/asset-image/asset-image.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class AssetImageRepositoryImpl {
    constructor() { }
    save(assetImage) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield assetImage.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield asset_image_model_1.AssetImage.findAll(filter);
            let datas = yield asset_image_model_1.AssetImage.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield asset_image_model_1.AssetImage.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield asset_image_model_1.AssetImage.count(filter);
        });
    }
    update(assetImage, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield asset_image_model_1.AssetImage.update(assetImage, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield asset_image_model_1.AssetImage.destroy(option);
        });
    }
}
exports.AssetImageRepositoryImpl = AssetImageRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/asset.repository.impl.ts":
/*!**********************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/asset.repository.impl.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const asset_model_1 = __webpack_require__(/*! @domain/asset/asset.model */ "./src/server/domain/asset/asset.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class AssetRepositoryImpl {
    constructor() { }
    save(asset) {
        return __awaiter(this, void 0, void 0, function* () {
            const _ = asset_model_1.Asset.build(asset);
            return yield _.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield asset_model_1.Asset.findAll(filter);
            let datas = yield asset_model_1.Asset.findAll(filter);
            for (let data of datas) {
                json_dot_parser_1.removeDotInJson(data);
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield asset_model_1.Asset.findByPrimary(id);
        });
    }
    update(asset, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield asset_model_1.Asset.update(asset, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield asset_model_1.Asset.destroy(option);
        });
    }
}
exports.AssetRepositoryImpl = AssetRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/category.repository.impl.ts":
/*!*************************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/category.repository.impl.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_model_1 = __webpack_require__(/*! @domain/category/category.model */ "./src/server/domain/category/category.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class CategoryRepositoryImpl {
    constructor() { }
    save(category) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield category_model_1.Category.findAll(filter);
            let datas = yield category_model_1.Category.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category_model_1.Category.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category_model_1.Category.count(filter);
        });
    }
    update(category, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category_model_1.Category.update(category, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category_model_1.Category.destroy(option);
        });
    }
}
exports.CategoryRepositoryImpl = CategoryRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/connected-account.repository.impl.ts":
/*!**********************************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/connected-account.repository.impl.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connected_account_model_1 = __webpack_require__(/*! @domain/connected-account/connected-account.model */ "./src/server/domain/connected-account/connected-account.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class ConnectedAccountRepositoryImpl {
    constructor() { }
    save(connectedAccount) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield connectedAccount.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield connected_account_model_1.ConnectedAccount.findAll(filter);
            let datas = yield connected_account_model_1.ConnectedAccount.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield connected_account_model_1.ConnectedAccount.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield connected_account_model_1.ConnectedAccount.count(filter);
        });
    }
    update(connectedAccount, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield connected_account_model_1.ConnectedAccount.update(connectedAccount, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield connected_account_model_1.ConnectedAccount.destroy(option);
        });
    }
}
exports.ConnectedAccountRepositoryImpl = ConnectedAccountRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/coupon.repository.impl.ts":
/*!***********************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/coupon.repository.impl.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const coupon_model_1 = __webpack_require__(/*! @domain/coupon/coupon.model */ "./src/server/domain/coupon/coupon.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class CouponRepositoryImpl {
    constructor() { }
    save(coupon) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield coupon.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield coupon_model_1.Coupon.findAll(filter);
            let datas = yield coupon_model_1.Coupon.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield coupon_model_1.Coupon.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield coupon_model_1.Coupon.count(filter);
        });
    }
    update(coupon, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield coupon_model_1.Coupon.update(coupon, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield coupon_model_1.Coupon.destroy(option);
        });
    }
}
exports.CouponRepositoryImpl = CouponRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/ethereum-config.repository.impl.ts":
/*!********************************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/ethereum-config.repository.impl.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethereum_config_model_1 = __webpack_require__(/*! @domain/ethereum-config/ethereum-config.model */ "./src/server/domain/ethereum-config/ethereum-config.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class EthereumConfigRepositoryImpl {
    constructor() { }
    save(ethereumConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ethereumConfig.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield ethereum_config_model_1.EthereumConfig.findAll(filter);
            let datas = yield ethereum_config_model_1.EthereumConfig.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ethereum_config_model_1.EthereumConfig.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ethereum_config_model_1.EthereumConfig.count(filter);
        });
    }
    update(ethereumConfig, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ethereum_config_model_1.EthereumConfig.update(ethereumConfig, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ethereum_config_model_1.EthereumConfig.destroy(option);
        });
    }
}
exports.EthereumConfigRepositoryImpl = EthereumConfigRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/exchange-rate.repository.impl.ts":
/*!******************************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/exchange-rate.repository.impl.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const exchange_rate_model_1 = __webpack_require__(/*! @domain/exchange-rate/exchange-rate.model */ "./src/server/domain/exchange-rate/exchange-rate.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class ExchangeRateRepositoryImpl {
    constructor() { }
    save(exchangeRate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield exchangeRate.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield exchange_rate_model_1.ExchangeRate.findAll(filter);
            let datas = yield exchange_rate_model_1.ExchangeRate.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield exchange_rate_model_1.ExchangeRate.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield exchange_rate_model_1.ExchangeRate.count(filter);
        });
    }
    update(exchangeRate, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield exchange_rate_model_1.ExchangeRate.update(exchangeRate, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield exchange_rate_model_1.ExchangeRate.destroy(option);
        });
    }
}
exports.ExchangeRateRepositoryImpl = ExchangeRateRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/external-wallet.repository.impl.ts":
/*!********************************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/external-wallet.repository.impl.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const external_wallet_model_1 = __webpack_require__(/*! @domain/external-wallet/external-wallet.model */ "./src/server/domain/external-wallet/external-wallet.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class ExternalWalletRepositoryImpl {
    constructor() { }
    save(externalWallet) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield externalWallet.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield external_wallet_model_1.ExternalWallet.findAll(filter);
            let datas = yield external_wallet_model_1.ExternalWallet.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield external_wallet_model_1.ExternalWallet.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield external_wallet_model_1.ExternalWallet.count(filter);
        });
    }
    update(externalWallet, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield external_wallet_model_1.ExternalWallet.update(externalWallet, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield external_wallet_model_1.ExternalWallet.destroy(option);
        });
    }
}
exports.ExternalWalletRepositoryImpl = ExternalWalletRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/index.ts":
/*!******************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/index.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./order.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/order.repository.impl.ts"));
__export(__webpack_require__(/*! ./asset-desc.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/asset-desc.repository.impl.ts"));
__export(__webpack_require__(/*! ./asset-image.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/asset-image.repository.impl.ts"));
__export(__webpack_require__(/*! ./asset.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/asset.repository.impl.ts"));
__export(__webpack_require__(/*! ./category.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/category.repository.impl.ts"));
__export(__webpack_require__(/*! ./ethereum-config.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/ethereum-config.repository.impl.ts"));
__export(__webpack_require__(/*! ./exchange-rate.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/exchange-rate.repository.impl.ts"));
__export(__webpack_require__(/*! ./external-wallet.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/external-wallet.repository.impl.ts"));
__export(__webpack_require__(/*! ./sales-proposal.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/sales-proposal.repository.impl.ts"));
__export(__webpack_require__(/*! ./sales.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/sales.repository.impl.ts"));
__export(__webpack_require__(/*! ./token.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/token.repository.impl.ts"));
__export(__webpack_require__(/*! ./transaction.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/transaction.repository.impl.ts"));
__export(__webpack_require__(/*! ./user.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/user.repository.impl.ts"));
__export(__webpack_require__(/*! ./wallet.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/wallet.repository.impl.ts"));
__export(__webpack_require__(/*! ./applied-coupon.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/applied-coupon.repository.impl.ts"));
__export(__webpack_require__(/*! ./coupon.repository.impl */ "./src/server/infra/sequelizejs/mysql/repositories/coupon.repository.impl.ts"));


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/monthly-asset-info.repository.impl.ts":
/*!***********************************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/monthly-asset-info.repository.impl.ts ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const monthly_asset_info_model_1 = __webpack_require__(/*! @domain/monthly-asset-info/monthly-asset-info.model */ "./src/server/domain/monthly-asset-info/monthly-asset-info.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class MonthlyAssetInfoRepositoryImpl {
    constructor() { }
    save(monthlyAssetInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield monthlyAssetInfo.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield monthly_asset_info_model_1.MonthlyAssetInfo.findAll(filter);
            let datas = yield monthly_asset_info_model_1.MonthlyAssetInfo.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield monthly_asset_info_model_1.MonthlyAssetInfo.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield monthly_asset_info_model_1.MonthlyAssetInfo.count(filter);
        });
    }
    update(monthlyAssetInfo, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield monthly_asset_info_model_1.MonthlyAssetInfo.update(monthlyAssetInfo, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield monthly_asset_info_model_1.MonthlyAssetInfo.destroy(option);
        });
    }
}
exports.MonthlyAssetInfoRepositoryImpl = MonthlyAssetInfoRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/order.repository.impl.ts":
/*!**********************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/order.repository.impl.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_model_1 = __webpack_require__(/*! @domain/order/order.model */ "./src/server/domain/order/order.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class OrderRepositoryImpl {
    constructor() { }
    save(order) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield order.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield order_model_1.Order.findAll(filter);
            let datas = yield order_model_1.Order.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield order_model_1.Order.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield order_model_1.Order.count(filter);
        });
    }
    update(order, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield order_model_1.Order.update(order, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield order_model_1.Order.destroy(option);
        });
    }
}
exports.OrderRepositoryImpl = OrderRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/pocket.repository.impl.ts":
/*!***********************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/pocket.repository.impl.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pocket_model_1 = __webpack_require__(/*! @domain/pocket/pocket.model */ "./src/server/domain/pocket/pocket.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class PocketRepositoryImpl {
    constructor() { }
    save(pocket) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pocket.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield pocket_model_1.Pocket.findAll(filter);
            let datas = yield pocket_model_1.Pocket.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pocket_model_1.Pocket.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pocket_model_1.Pocket.count(filter);
        });
    }
    update(pocket, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pocket_model_1.Pocket.update(pocket, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield pocket_model_1.Pocket.destroy(option);
        });
    }
}
exports.PocketRepositoryImpl = PocketRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/reward.repository.impl.ts":
/*!***********************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/reward.repository.impl.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const reward_model_1 = __webpack_require__(/*! @domain/reward/reward.model */ "./src/server/domain/reward/reward.model.ts");
class RewardRepositoryImpl {
    constructor() { }
    save(reward) {
        return __awaiter(this, void 0, void 0, function* () {
            const _ = reward_model_1.Reward.build(reward);
            return yield _.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reward_model_1.Reward.findAll(filter);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reward_model_1.Reward.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reward_model_1.Reward.count(filter);
        });
    }
    update(reward, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reward_model_1.Reward.update(reward, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield reward_model_1.Reward.destroy(option);
        });
    }
}
exports.RewardRepositoryImpl = RewardRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/sales-proposal.repository.impl.ts":
/*!*******************************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/sales-proposal.repository.impl.ts ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sales_proposal_model_1 = __webpack_require__(/*! @domain/sales-proposal/sales-proposal.model */ "./src/server/domain/sales-proposal/sales-proposal.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class SalesProposalRepositoryImpl {
    constructor() { }
    save(salesProposal) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield salesProposal.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield sales_proposal_model_1.SalesProposal.findAll(filter);
            let datas = yield sales_proposal_model_1.SalesProposal.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sales_proposal_model_1.SalesProposal.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sales_proposal_model_1.SalesProposal.count(filter);
        });
    }
    update(salesProposal, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sales_proposal_model_1.SalesProposal.update(salesProposal, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sales_proposal_model_1.SalesProposal.destroy(option);
        });
    }
}
exports.SalesProposalRepositoryImpl = SalesProposalRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/sales.repository.impl.ts":
/*!**********************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/sales.repository.impl.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sales_model_1 = __webpack_require__(/*! @domain/sales/sales.model */ "./src/server/domain/sales/sales.model.ts");
class SalesRepositoryImpl {
    constructor() { }
    save(sales) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sales.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sales_model_1.Sales.findAll(filter);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sales_model_1.Sales.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sales_model_1.Sales.count(filter);
        });
    }
    update(sales, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sales_model_1.Sales.update(sales, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield sales_model_1.Sales.destroy(option);
        });
    }
}
exports.SalesRepositoryImpl = SalesRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/token.repository.impl.ts":
/*!**********************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/token.repository.impl.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_model_1 = __webpack_require__(/*! @domain/token/token.model */ "./src/server/domain/token/token.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class TokenRepositoryImpl {
    constructor() { }
    save(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield token.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield token_model_1.Token.findAll(filter);
            let datas = yield token_model_1.Token.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield token_model_1.Token.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield token_model_1.Token.count(filter);
        });
    }
    update(token, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield token_model_1.Token.update(token, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield token_model_1.Token.destroy(option);
        });
    }
}
exports.TokenRepositoryImpl = TokenRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/transaction.repository.impl.ts":
/*!****************************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/transaction.repository.impl.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const transaction_model_1 = __webpack_require__(/*! @domain/transaction/transaction.model */ "./src/server/domain/transaction/transaction.model.ts");
const sequelize = __webpack_require__(/*! sequelize */ "sequelize");
class TransactionRepositoryImpl {
    constructor() { }
    save(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield transaction.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                filter.raw = true;
            return yield transaction_model_1.Transaction.findAll(filter);
        });
    }
    getTotalAmount(userId, assetId) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield transaction_model_1.Transaction.findAll({
                attributes: [
                    'id',
                    [sequelize.fn('SUM', sequelize.col('amount')), 'totalInvestAmount']
                ],
                where: { assetId, fromUserId: userId },
                raw: true
            });
            console.log(result);
            return result[0];
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield transaction_model_1.Transaction.findByPrimary(id, { raw: true });
        });
    }
    update(transaction, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield transaction_model_1.Transaction.update(transaction, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield transaction_model_1.Transaction.destroy(option);
        });
    }
}
exports.TransactionRepositoryImpl = TransactionRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/user.repository.impl.ts":
/*!*********************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/user.repository.impl.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
class UserRepositoryImpl {
    constructor() { }
    save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.User.findAll(filter);
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.User.findByPrimary(id);
        });
    }
    update(user, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.User.update(user, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.User.destroy(option);
        });
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/wallet.repository.impl.ts":
/*!***********************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/wallet.repository.impl.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_model_1 = __webpack_require__(/*! @domain/wallet/wallet.model */ "./src/server/domain/wallet/wallet.model.ts");
const json_dot_parser_1 = __webpack_require__(/*! @frontalnh/json-dot-parser */ "@frontalnh/json-dot-parser");
class WalletRepositoryImpl {
    constructor() { }
    save(wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet.save();
        });
    }
    findAll(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filter.raw)
                return yield wallet_model_1.Wallet.findAll(filter);
            let datas = yield wallet_model_1.Wallet.findAll(filter);
            for (let data of datas) {
                Object.assign(data, json_dot_parser_1.removeDotInJson(data));
            }
            return datas;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_model_1.Wallet.findByPrimary(id);
        });
    }
    getCount(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_model_1.Wallet.count(filter);
        });
    }
    update(wallet, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_model_1.Wallet.update(wallet, option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield wallet_model_1.Wallet.destroy(option);
        });
    }
}
exports.WalletRepositoryImpl = WalletRepositoryImpl;


/***/ }),

/***/ "./src/server/infra/swagger/swagger-spec.js":
/*!**************************************************!*\
  !*** ./src/server/infra/swagger/swagger-spec.js ***!
  \**************************************************/
/*! exports provided: swaggerSpec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swaggerSpec", function() { return swaggerSpec; });
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swagger-jsdoc */ "swagger-jsdoc");
/* harmony import */ var swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0__);

var options = {
  swaggerDefinition: {
    info: {
      title: 'DDD Server',
      // Title (required)
      version: '1.0.0' // Version (required)

    },
    basePath: 'http://sa-ddd-server2-dev.ap-northeast-2.elasticbeanstalk.com'
  },
  apis: ['./src/server/interfaces/http/*.route.ts', './src/server/infra/swagger/models.js', './src/server/infra/swagger/schemas.js', './src/server/infra/swagger/extended.js'] // Path to the API docs

};
var swaggerSpec = swagger_jsdoc__WEBPACK_IMPORTED_MODULE_0___default()(options);

/***/ }),

/***/ "./src/server/interfaces/http/api-user.route.ts":
/*!******************************************************!*\
  !*** ./src/server/interfaces/http/api-user.route.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const api_user_model_1 = __webpack_require__(/*! @domain/api-user/api-user.model */ "./src/server/domain/api-user/api-user.model.ts");
const GetApiTokenSchema_1 = __webpack_require__(/*! @common/validateSchemas/GetApiTokenSchema */ "./src/server/common/validateSchemas/GetApiTokenSchema.ts");
const CreateApiUserSchema_1 = __webpack_require__(/*! @common/validateSchemas/CreateApiUserSchema */ "./src/server/common/validateSchemas/CreateApiUserSchema.ts");
const CustomError_1 = __webpack_require__(/*! @common/models/CustomError */ "./src/server/common/models/CustomError.ts");
const HttpErrCode_1 = __webpack_require__(/*! @common/constants/HttpErrCode */ "./src/server/common/constants/HttpErrCode.ts");
const authenticator_1 = __webpack_require__(/*! @utils/authenticator */ "./src/server/utils/authenticator.ts");
const bcrypt = __importStar(__webpack_require__(/*! bcryptjs */ "bcryptjs"));
class ApiUserRoute {
    constructor(apiUserRepository) {
        this.apiUserRepository = apiUserRepository;
        this.apiUserRepository = apiUserRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /api-users:
         *   post:
         *     description: ApiUser API
         *     tags:
         *       - ApiUsers
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/CreateApiUserSchema'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/ApiUser'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /api-users/get-api-token:
         *   post:
         *     description: API 토큰을 요청으로 요청 성공시 쿠키에 sa-jwt가 전달된다.
         *     tags:
         *       - ApiUsers
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         type: object
         *         schema:
         *           $ref: '#/definitions/GetApiTokenSchema'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/ApiUser'
         */
        this.router.post('/get-api-token', (...args) => this.getApiToken(...args));
        /**
         * @swagger
         * /api-users:
         *   get:
         *     description: ApiUser API
         *     tags:
         *       - ApiUsers
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
         *                 $ref: '#/definitions/ApiUser'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /api-users/{id}:
         *   get:
         *     description: ApiUser API
         *     tags:
         *       - ApiUsers
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single apiUser
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/ApiUser'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /api-users:
         *   put:
         *     description: Update apiUser
         *     tags:
         *       - ApiUsers
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/ApiUser'
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
         *           $ref: '#/definitions/ApiUser'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /api-users:
         *   delete:
         *     description: Delete apiUser
         *     tags:
         *       - ApiUsers
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/ApiUser'
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
    getApiToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let { error } = joi_1.default.validate(req.body, GetApiTokenSchema_1.GetApiTokenSchema);
            if (error)
                return next(error);
            let { id, password } = req.body;
            let user = yield this.apiUserRepository.findById(id);
            if (!user)
                return next(new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.API.NO_USER, '가입된 유저가 아닙니다.'));
            let isValid = bcrypt.compareSync(password, user.password);
            if (!isValid)
                return next(new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.API.INVALID_PASSWORD, '틀린 비밀번호 입니다.'));
            let jwt = authenticator_1.encodeJwt({ user: { id: user.id, name: user.name } }, 60 * 60);
            res.cookie('sa-jwt', jwt);
            return res.send(user);
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { error } = joi_1.default.validate(req.body, CreateApiUserSchema_1.CreateApiUserSchema);
                if (error)
                    return next(error);
                let { id, password, name } = req.body;
                let existUser = yield this.apiUserRepository.findById(id);
                if (existUser)
                    throw new CustomError_1.CustomError(HttpErrCode_1.HttpErrCode.API.EXIST_ID, '이미 존재하는 id 입니다.');
                password = authenticator_1.encrypt(password);
                let apiUser = new api_user_model_1.ApiUser({ id, password, name });
                let created = yield this.apiUserRepository.save(apiUser);
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
                let payload = yield this.apiUserRepository.findAll(value);
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
                let apiUser = yield this.apiUserRepository.findById(id);
                return res.send(apiUser);
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
                let [count, payload] = yield this.apiUserRepository.update(data, option);
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
                let count = yield this.apiUserRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.ApiUserRoute = ApiUserRoute;


/***/ }),

/***/ "./src/server/interfaces/http/applied-coupon.route.ts":
/*!************************************************************!*\
  !*** ./src/server/interfaces/http/applied-coupon.route.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const applied_coupon_model_1 = __webpack_require__(/*! @domain/applied-coupon/applied-coupon.model */ "./src/server/domain/applied-coupon/applied-coupon.model.ts");
class AppliedCouponRoute {
    constructor(appliedCouponRepository) {
        this.appliedCouponRepository = appliedCouponRepository;
        this.appliedCouponRepository = appliedCouponRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /applied-coupons:
         *   post:
         *     description: AppliedCoupon API
         *     tags:
         *       - AppliedCoupons
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/CreateAppliedCouponSchema'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/AppliedCoupon'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /applied-coupons:
         *   get:
         *     description: AppliedCoupon API
         *     tags:
         *       - AppliedCoupons
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
         *                 $ref: '#/definitions/AppliedCoupon'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /applied-coupons/{id}:
         *   get:
         *     description: AppliedCoupon API
         *     tags:
         *       - AppliedCoupons
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single appliedCoupon
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/AppliedCoupon'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /applied-coupons:
         *   put:
         *     description: Update appliedCoupon
         *     tags:
         *       - AppliedCoupons
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/AppliedCoupon'
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
         *           $ref: '#/definitions/AppliedCoupon'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /applied-coupons:
         *   delete:
         *     description: Delete appliedCoupon
         *     tags:
         *       - AppliedCoupons
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/AppliedCoupon'
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
                let appliedCoupon = new applied_coupon_model_1.AppliedCoupon(req.body);
                let created = yield this.appliedCouponRepository.save(appliedCoupon);
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
                let payload = yield this.appliedCouponRepository.findAll(value);
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
                let appliedCoupon = yield this.appliedCouponRepository.findById(id);
                return res.send(appliedCoupon);
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
                let [count, payload] = yield this.appliedCouponRepository.update(data, option);
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
                let count = yield this.appliedCouponRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.AppliedCouponRoute = AppliedCouponRoute;


/***/ }),

/***/ "./src/server/interfaces/http/asset-desc.route.ts":
/*!********************************************************!*\
  !*** ./src/server/interfaces/http/asset-desc.route.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const asset_desc_model_1 = __webpack_require__(/*! @domain/asset-desc/asset-desc.model */ "./src/server/domain/asset-desc/asset-desc.model.ts");
class AssetDescRoute {
    constructor(assetDescRepository) {
        this.assetDescRepository = assetDescRepository;
        this.assetDescRepository = assetDescRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /asset-descs:
         *   post:
         *     description: AssetDesc API
         *     tags:
         *       - AssetDescs
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/AssetDesc'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/AssetDesc'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /asset-descs:
         *   get:
         *     description: AssetDesc API
         *     tags:
         *       - AssetDescs
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
         *                 $ref: '#/definitions/AssetDesc'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /asset-descs/{id}:
         *   get:
         *     description: AssetDesc API
         *     tags:
         *       - AssetDescs
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single assetDesc
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/AssetDesc'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /asset-descs:
         *   put:
         *     description: Update assetDesc
         *     tags:
         *       - AssetDescs
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/AssetDesc'
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
         *           $ref: '#/definitions/AssetDesc'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /asset-descs:
         *   delete:
         *     description: Delete assetDesc
         *     tags:
         *       - AssetDescs
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/AssetDesc'
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
                let assetDesc = new asset_desc_model_1.AssetDesc(req.body);
                let created = yield this.assetDescRepository.save(assetDesc);
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
                let payload = yield this.assetDescRepository.findAll(value);
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
                let assetDesc = yield this.assetDescRepository.findById(id);
                return res.send(assetDesc);
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
                let [count, payload] = yield this.assetDescRepository.update(data, option);
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
                let count = yield this.assetDescRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.AssetDescRoute = AssetDescRoute;


/***/ }),

/***/ "./src/server/interfaces/http/asset-image.route.ts":
/*!*********************************************************!*\
  !*** ./src/server/interfaces/http/asset-image.route.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const asset_image_model_1 = __webpack_require__(/*! @domain/asset-image/asset-image.model */ "./src/server/domain/asset-image/asset-image.model.ts");
class AssetImageRoute {
    constructor(assetImageRepository) {
        this.assetImageRepository = assetImageRepository;
        this.assetImageRepository = assetImageRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /asset-images:
         *   post:
         *     description: AssetImage API
         *     tags:
         *       - AssetImages
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/AssetImage'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/AssetImage'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /asset-images:
         *   get:
         *     description: AssetImage API
         *     tags:
         *       - AssetImages
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
         *                 $ref: '#/definitions/AssetImage'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /asset-images/{id}:
         *   get:
         *     description: AssetImage API
         *     tags:
         *       - AssetImages
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single assetImage
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/AssetImage'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /asset-images:
         *   put:
         *     description: Update assetImage
         *     tags:
         *       - AssetImages
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/AssetImage'
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
         *           $ref: '#/definitions/AssetImage'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /asset-images:
         *   delete:
         *     description: Delete assetImage
         *     tags:
         *       - AssetImages
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/AssetImage'
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
                let assetImage = new asset_image_model_1.AssetImage(req.body);
                let created = yield this.assetImageRepository.save(assetImage);
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
                let payload = yield this.assetImageRepository.findAll(value);
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
                let assetImage = yield this.assetImageRepository.findById(id);
                return res.send(assetImage);
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
                let [count, payload] = yield this.assetImageRepository.update(data, option);
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
                let count = yield this.assetImageRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.AssetImageRoute = AssetImageRoute;


/***/ }),

/***/ "./src/server/interfaces/http/asset.route.ts":
/*!***************************************************!*\
  !*** ./src/server/interfaces/http/asset.route.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
class AssetRoute {
    constructor(assetRepository, assetApi) {
        this.assetRepository = assetRepository;
        this.assetApi = assetApi;
        this.assetRepository = assetRepository;
        this.assetApi = assetApi;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /assets:
         *   post:
         *     description: Asset API
         *     tags:
         *       - Assets
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/CreateAssetSchema'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/Asset'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /assets:
         *   get:
         *     description: Asset API
         *     tags:
         *       - Assets
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
         *                 $ref: '#/definitions/Asset'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /assets/{id}:
         *   get:
         *     description: Asset API
         *     tags:
         *       - Assets
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single asset
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/Asset'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /assets/with-statistic-info:
         *   get:
         *     description: sdfsd
         *     tags:
         *       - Asset
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: query
         *         name: sdf
         *         type: sdf
         *         description: sdf
         *     responses:
         *       200:
         *         description: sdf
         *         schema:
         *           $ref: '#/definitions/Asset'
         */
        this.router.get('/with-statistic-info', (...args) => this.findAllWithStatisticInfo(...args));
        /**
         * @swagger
         * /assets:
         *   put:
         *     description: Update asset
         *     tags:
         *       - Assets
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/Asset'
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
         *           $ref: '#/definitions/Asset'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /assets:
         *   delete:
         *     description: Delete asset
         *     tags:
         *       - Assets
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/Asset'
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
                let asset = req.body;
                let created = yield this.assetRepository.save(asset);
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
                if (req.query.where && req.query.where.userId) {
                    let assets = yield this.assetApi.findAssetWithStatisticInfo(req.query);
                    return httpSender_1.httpSuccessResponse(res, assets);
                }
                else {
                    let payload = yield this.assetRepository.findAll(req.query);
                    return httpSender_1.httpSuccessResponse(res, { payload });
                }
            }
            catch (err) {
                return next(err);
            }
        });
    }
    // @authGuard
    findAllWithStatisticInfo(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let assets = yield this.assetApi.findAssetWithStatisticInfo(req.query);
                return httpSender_1.httpSuccessResponse(res, { payload: assets });
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
                let asset = yield this.assetRepository.findById(id);
                return res.send(asset);
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
                let [count, payload] = yield this.assetRepository.update(data, option);
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
                let count = yield this.assetRepository.delete(option);
                res.send(count.toString());
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.AssetRoute = AssetRoute;


/***/ }),

/***/ "./src/server/interfaces/http/auth.route.ts":
/*!**************************************************!*\
  !*** ./src/server/interfaces/http/auth.route.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const LoginSchema_1 = __webpack_require__(/*! @common/validateSchemas/LoginSchema */ "./src/server/common/validateSchemas/LoginSchema.ts");
class AuthRoute {
    constructor(authApi) {
        this.authApi = authApi;
        this.verifyEmail = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { email, code } = req.query;
                let isAuthorized = yield this.authApi.authenticateEmail(email, code);
                if (isAuthorized) {
                    return res.redirect('http://localhost:1234/email-verification-complete');
                }
            }
            catch (err) {
                console.log(err);
                return next(err);
            }
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            let { error } = joi_1.default.validate(body, LoginSchema_1.LoginSchema);
            if (error)
                return next(error);
            const { email, password } = body;
            // login api
            try {
                const { user, token } = yield this.authApi.login(email, password);
                res.cookie('jwtToken', token);
                res.send({ user, token });
            }
            catch (err) {
                return next(err);
            }
        });
        this.logout = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.clearCookie('jwtToken');
            return res.json({ done: true });
        });
        this.router = express_1.default.Router();
        this.authApi = authApi;
    }
    handle() {
        this.router.post('/login', this.login);
        this.router.post('/logout', this.logout);
        this.router.get('/verify-email', this.verifyEmail);
        return this.router;
    }
}
exports.AuthRoute = AuthRoute;


/***/ }),

/***/ "./src/server/interfaces/http/category.route.ts":
/*!******************************************************!*\
  !*** ./src/server/interfaces/http/category.route.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const category_model_1 = __webpack_require__(/*! @domain/category/category.model */ "./src/server/domain/category/category.model.ts");
class CategoryRoute {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
        this.categoryRepository = categoryRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /categorys:
         *   post:
         *     description: Category API
         *     tags:
         *       - Categorys
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/Category'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/Category'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /categorys:
         *   get:
         *     description: Category API
         *     tags:
         *       - Categorys
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
         *                 $ref: '#/definitions/Category'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /categorys/{id}:
         *   get:
         *     description: Category API
         *     tags:
         *       - Categorys
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single category
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/Category'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /categorys:
         *   put:
         *     description: Update category
         *     tags:
         *       - Categorys
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/Category'
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
         *           $ref: '#/definitions/Category'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /categorys:
         *   delete:
         *     description: Delete category
         *     tags:
         *       - Categorys
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/Category'
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
                let category = new category_model_1.Category(req.body);
                let created = yield this.categoryRepository.save(category);
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
                let payload = yield this.categoryRepository.findAll(value);
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
                let category = yield this.categoryRepository.findById(id);
                return res.send(category);
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
                let [count, payload] = yield this.categoryRepository.update(data, option);
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
                let count = yield this.categoryRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.CategoryRoute = CategoryRoute;


/***/ }),

/***/ "./src/server/interfaces/http/coupon.route.ts":
/*!****************************************************!*\
  !*** ./src/server/interfaces/http/coupon.route.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const coupon_model_1 = __webpack_require__(/*! @domain/coupon/coupon.model */ "./src/server/domain/coupon/coupon.model.ts");
class CouponRoute {
    constructor(couponRepository) {
        this.couponRepository = couponRepository;
        this.couponRepository = couponRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /coupons:
         *   post:
         *     description: Coupon API
         *     tags:
         *       - Coupons
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/Coupon'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/Coupon'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /coupons:
         *   get:
         *     description: Coupon API
         *     tags:
         *       - Coupons
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
         *                 $ref: '#/definitions/Coupon'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /coupons/{id}:
         *   get:
         *     description: Coupon API
         *     tags:
         *       - Coupons
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single coupon
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/Coupon'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /coupons:
         *   put:
         *     description: Update coupon
         *     tags:
         *       - Coupons
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/Coupon'
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
         *           $ref: '#/definitions/Coupon'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /coupons:
         *   delete:
         *     description: Delete coupon
         *     tags:
         *       - Coupons
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/Coupon'
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
                let coupon = new coupon_model_1.Coupon(req.body);
                let created = yield this.couponRepository.save(coupon);
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
                let payload = yield this.couponRepository.findAll(value);
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
                let coupon = yield this.couponRepository.findById(id);
                return res.send(coupon);
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
                let [count, payload] = yield this.couponRepository.update(data, option);
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
                let count = yield this.couponRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.CouponRoute = CouponRoute;


/***/ }),

/***/ "./src/server/interfaces/http/ethereum-config.route.ts":
/*!*************************************************************!*\
  !*** ./src/server/interfaces/http/ethereum-config.route.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const ethereum_config_model_1 = __webpack_require__(/*! @domain/ethereum-config/ethereum-config.model */ "./src/server/domain/ethereum-config/ethereum-config.model.ts");
class EthereumConfigRoute {
    constructor(ethereumConfigRepository) {
        this.ethereumConfigRepository = ethereumConfigRepository;
        this.ethereumConfigRepository = ethereumConfigRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /ethereum-configs:
         *   post:
         *     description: EthereumConfig API
         *     tags:
         *       - EthereumConfigs
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/EthereumConfig'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/EthereumConfig'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /ethereum-configs:
         *   get:
         *     description: EthereumConfig API
         *     tags:
         *       - EthereumConfigs
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
         *                 $ref: '#/definitions/EthereumConfig'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /ethereum-configs/{id}:
         *   get:
         *     description: EthereumConfig API
         *     tags:
         *       - EthereumConfigs
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single ethereumConfig
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/EthereumConfig'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /ethereum-configs:
         *   put:
         *     description: Update ethereumConfig
         *     tags:
         *       - EthereumConfigs
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/EthereumConfig'
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
         *           $ref: '#/definitions/EthereumConfig'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /ethereum-configs:
         *   delete:
         *     description: Delete ethereumConfig
         *     tags:
         *       - EthereumConfigs
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/EthereumConfig'
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
                let ethereumConfig = new ethereum_config_model_1.EthereumConfig(req.body);
                let created = yield this.ethereumConfigRepository.save(ethereumConfig);
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
                let payload = yield this.ethereumConfigRepository.findAll(value);
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
                let ethereumConfig = yield this.ethereumConfigRepository.findById(id);
                return res.send(ethereumConfig);
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
                let [count, payload] = yield this.ethereumConfigRepository.update(data, option);
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
                let count = yield this.ethereumConfigRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.EthereumConfigRoute = EthereumConfigRoute;


/***/ }),

/***/ "./src/server/interfaces/http/exchange-rate.route.ts":
/*!***********************************************************!*\
  !*** ./src/server/interfaces/http/exchange-rate.route.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const exchange_rate_model_1 = __webpack_require__(/*! @domain/exchange-rate/exchange-rate.model */ "./src/server/domain/exchange-rate/exchange-rate.model.ts");
class ExchangeRateRoute {
    constructor(exchangeRateRepository) {
        this.exchangeRateRepository = exchangeRateRepository;
        this.exchangeRateRepository = exchangeRateRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /exchange-rates:
         *   post:
         *     description: ExchangeRate API
         *     tags:
         *       - ExchangeRates
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/ExchangeRate'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/ExchangeRate'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /exchange-rates:
         *   get:
         *     description: ExchangeRate API
         *     tags:
         *       - ExchangeRates
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
         *                 $ref: '#/definitions/ExchangeRate'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /exchange-rates/{id}:
         *   get:
         *     description: ExchangeRate API
         *     tags:
         *       - ExchangeRates
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single exchangeRate
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/ExchangeRate'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /exchange-rates:
         *   put:
         *     description: Update exchangeRate
         *     tags:
         *       - ExchangeRates
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/ExchangeRate'
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
         *           $ref: '#/definitions/ExchangeRate'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /exchange-rates:
         *   delete:
         *     description: Delete exchangeRate
         *     tags:
         *       - ExchangeRates
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/ExchangeRate'
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
                let exchangeRate = new exchange_rate_model_1.ExchangeRate(req.body);
                let created = yield this.exchangeRateRepository.save(exchangeRate);
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
                let payload = yield this.exchangeRateRepository.findAll(value);
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
                let exchangeRate = yield this.exchangeRateRepository.findById(id);
                return res.send(exchangeRate);
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
                let [count, payload] = yield this.exchangeRateRepository.update(data, option);
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
                let count = yield this.exchangeRateRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.ExchangeRateRoute = ExchangeRateRoute;


/***/ }),

/***/ "./src/server/interfaces/http/external-wallet.route.ts":
/*!*************************************************************!*\
  !*** ./src/server/interfaces/http/external-wallet.route.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const external_wallet_model_1 = __webpack_require__(/*! @domain/external-wallet/external-wallet.model */ "./src/server/domain/external-wallet/external-wallet.model.ts");
class ExternalWalletRoute {
    constructor(externalWalletRepository) {
        this.externalWalletRepository = externalWalletRepository;
        this.externalWalletRepository = externalWalletRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /external-wallets:
         *   post:
         *     description: ExternalWallet API
         *     tags:
         *       - ExternalWallets
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/ExternalWallet'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/ExternalWallet'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /external-wallets:
         *   get:
         *     description: ExternalWallet API
         *     tags:
         *       - ExternalWallets
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
         *                 $ref: '#/definitions/ExternalWallet'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /external-wallets/{id}:
         *   get:
         *     description: ExternalWallet API
         *     tags:
         *       - ExternalWallets
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single externalWallet
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/ExternalWallet'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /external-wallets:
         *   put:
         *     description: Update externalWallet
         *     tags:
         *       - ExternalWallets
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/ExternalWallet'
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
         *           $ref: '#/definitions/ExternalWallet'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /external-wallets:
         *   delete:
         *     description: Delete externalWallet
         *     tags:
         *       - ExternalWallets
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/ExternalWallet'
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
                let externalWallet = new external_wallet_model_1.ExternalWallet(req.body);
                let created = yield this.externalWalletRepository.save(externalWallet);
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
                let payload = yield this.externalWalletRepository.findAll(value);
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
                let externalWallet = yield this.externalWalletRepository.findById(id);
                return res.send(externalWallet);
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
                let [count, payload] = yield this.externalWalletRepository.update(data, option);
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
                let count = yield this.externalWalletRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.ExternalWalletRoute = ExternalWalletRoute;


/***/ }),

/***/ "./src/server/interfaces/http/index.ts":
/*!*********************************************!*\
  !*** ./src/server/interfaces/http/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(__webpack_require__(/*! express */ "express"));
const order_route_1 = __webpack_require__(/*! @interfaces/http/order.route */ "./src/server/interfaces/http/order.route.ts");
const user_route_1 = __webpack_require__(/*! @interfaces/http/user.route */ "./src/server/interfaces/http/user.route.ts");
const applied_coupon_route_1 = __webpack_require__(/*! @interfaces/http/applied-coupon.route */ "./src/server/interfaces/http/applied-coupon.route.ts");
const asset_image_route_1 = __webpack_require__(/*! @interfaces/http/asset-image.route */ "./src/server/interfaces/http/asset-image.route.ts");
const asset_desc_route_1 = __webpack_require__(/*! @interfaces/http/asset-desc.route */ "./src/server/interfaces/http/asset-desc.route.ts");
const asset_route_1 = __webpack_require__(/*! @interfaces/http/asset.route */ "./src/server/interfaces/http/asset.route.ts");
const category_route_1 = __webpack_require__(/*! @interfaces/http/category.route */ "./src/server/interfaces/http/category.route.ts");
const coupon_route_1 = __webpack_require__(/*! @interfaces/http/coupon.route */ "./src/server/interfaces/http/coupon.route.ts");
const ethereum_config_route_1 = __webpack_require__(/*! @interfaces/http/ethereum-config.route */ "./src/server/interfaces/http/ethereum-config.route.ts");
const exchange_rate_route_1 = __webpack_require__(/*! @interfaces/http/exchange-rate.route */ "./src/server/interfaces/http/exchange-rate.route.ts");
const external_wallet_route_1 = __webpack_require__(/*! @interfaces/http/external-wallet.route */ "./src/server/interfaces/http/external-wallet.route.ts");
const reward_route_1 = __webpack_require__(/*! @interfaces/http/reward.route */ "./src/server/interfaces/http/reward.route.ts");
const sales_proposal_route_1 = __webpack_require__(/*! @interfaces/http/sales-proposal.route */ "./src/server/interfaces/http/sales-proposal.route.ts");
const sales_route_1 = __webpack_require__(/*! @interfaces/http/sales.route */ "./src/server/interfaces/http/sales.route.ts");
const token_route_1 = __webpack_require__(/*! @interfaces/http/token.route */ "./src/server/interfaces/http/token.route.ts");
const transaction_route_1 = __webpack_require__(/*! @interfaces/http/transaction.route */ "./src/server/interfaces/http/transaction.route.ts");
const wallet_route_1 = __webpack_require__(/*! @interfaces/http/wallet.route */ "./src/server/interfaces/http/wallet.route.ts");
const monthly_asset_info_route_1 = __webpack_require__(/*! @interfaces/http/monthly-asset-info.route */ "./src/server/interfaces/http/monthly-asset-info.route.ts");
const auth_route_1 = __webpack_require__(/*! @interfaces/http/auth.route */ "./src/server/interfaces/http/auth.route.ts");
const migration_route_1 = __webpack_require__(/*! @interfaces/http/migration.route */ "./src/server/interfaces/http/migration.route.ts");
const api_user_route_1 = __webpack_require__(/*! @interfaces/http/api-user.route */ "./src/server/interfaces/http/api-user.route.ts");
exports.router = (components) => {
    let _router = express.Router();
    const appliedCouponRoute = new applied_coupon_route_1.AppliedCouponRoute(components.appliedCouponRepository);
    const assetDescRoute = new asset_desc_route_1.AssetDescRoute(components.assetDescRepository);
    const assetImageRoute = new asset_image_route_1.AssetImageRoute(components.assetImageRepository);
    const assetRoute = new asset_route_1.AssetRoute(components.assetRepository, components.assetApi);
    const categoryRoute = new category_route_1.CategoryRoute(components.categoryRepository);
    const couponRoute = new coupon_route_1.CouponRoute(components.couponRepository);
    const ethereumConfigRoute = new ethereum_config_route_1.EthereumConfigRoute(components.ethereumConfigRepository);
    const exchangeRateRoute = new exchange_rate_route_1.ExchangeRateRoute(components.exchangeRateRepository);
    const externalWalletRoute = new external_wallet_route_1.ExternalWalletRoute(components.externalWalletRepository);
    const orderRoute = new order_route_1.OrderRoute(components.orderRepository);
    const rewardRoute = new reward_route_1.RewardRoute(components.rewardRepository);
    const salesProposalRoute = new sales_proposal_route_1.SalesProposalRoute(components.salesProposalRepository);
    const salesRoute = new sales_route_1.SalesRoute(components.salesRepository);
    const tokenRoute = new token_route_1.TokenRoute(components.tokenRepository);
    const transactionRoute = new transaction_route_1.TransactionRoute(components.transactionRepository);
    const userRoute = new user_route_1.UserRoute(components.userRepository, components.userApi, components.userService, components.connectedAccountService);
    const walletRoute = new wallet_route_1.WalletRoute(components.walletRepository);
    const monthlyAssetInfoRoute = new monthly_asset_info_route_1.MonthlyAssetInfoRoute(components.monthlyAssetInfoRepository);
    const authRoute = new auth_route_1.AuthRoute(components.authApi);
    const migrationRoute = new migration_route_1.MigrationRoute(components.userRepository, components.walletRepository, components.pocketRepository, components.externalWalletRepository, components.orderRepository, components.transactionRepository);
    const apiUserRoute = new api_user_route_1.ApiUserRoute(components.apiUserRepository);
    // _router.use('/api/v1/docs', swaggerRoute(express));
    _router.use('/api/v1/applied-coupons', appliedCouponRoute.handle());
    _router.use('/api/v1/asset-descs', assetDescRoute.handle());
    _router.use('/api/v1/asset-images', assetImageRoute.handle());
    _router.use('/api/v1/assets', assetRoute.handle());
    _router.use('/api/v1/auth', authRoute.handle());
    _router.use('/api/v1/categorys', categoryRoute.handle());
    _router.use('/api/v1/coupons', couponRoute.handle());
    _router.use('/api/v1/ethereum-configs', ethereumConfigRoute.handle());
    _router.use('/api/v1/exchange-rates', exchangeRateRoute.handle());
    _router.use('/api/v1/external-wallets', externalWalletRoute.handle());
    _router.use('/api/v1/orders', orderRoute.handle());
    _router.use('/api/v1/rewards', rewardRoute.handle());
    _router.use('/api/v1/sales-proposals', salesProposalRoute.handle());
    _router.use('/api/v1/saleses', salesRoute.handle());
    _router.use('/api/v1/tokens', tokenRoute.handle());
    _router.use('/api/v1/transactions', transactionRoute.handle());
    _router.use('/api/v1/users', userRoute.handle());
    _router.use('/api/v1/wallets', walletRoute.handle());
    _router.use('/api/v1/monthly-asset-infos', monthlyAssetInfoRoute.handle());
    _router.use('/api/v1/migration', migrationRoute.handle());
    _router.use('/api/v1/api-users', apiUserRoute.handle());
    return _router;
};


/***/ }),

/***/ "./src/server/interfaces/http/migration.route.ts":
/*!*******************************************************!*\
  !*** ./src/server/interfaces/http/migration.route.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(__webpack_require__(/*! express */ "express"));
const wallet_model_1 = __webpack_require__(/*! @domain/wallet/wallet.model */ "./src/server/domain/wallet/wallet.model.ts");
const user_model_1 = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
const pocket_model_1 = __webpack_require__(/*! @domain/pocket/pocket.model */ "./src/server/domain/pocket/pocket.model.ts");
const external_wallet_model_1 = __webpack_require__(/*! @domain/external-wallet/external-wallet.model */ "./src/server/domain/external-wallet/external-wallet.model.ts");
const transaction_model_1 = __webpack_require__(/*! @domain/transaction/transaction.model */ "./src/server/domain/transaction/transaction.model.ts");
const order_model_1 = __webpack_require__(/*! @domain/order/order.model */ "./src/server/domain/order/order.model.ts");
const Currency_1 = __webpack_require__(/*! @common/models/Currency */ "./src/server/common/models/Currency.ts");
const helper_1 = __webpack_require__(/*! @utils/helper */ "./src/server/utils/helper.ts");
const authenticator_1 = __webpack_require__(/*! @utils/authenticator */ "./src/server/utils/authenticator.ts");
class MigrationRoute {
    constructor(userRepository, walletRepository, pocketRepository, externalWalletRepository, orderRepository, transactionRepository) {
        this.userRepository = userRepository;
        this.walletRepository = walletRepository;
        this.pocketRepository = pocketRepository;
        this.externalWalletRepository = externalWalletRepository;
        this.orderRepository = orderRepository;
        this.transactionRepository = transactionRepository;
        this.router = express.Router();
    }
    handle() {
        this.router.post('', (...args) => this.create(...args));
        return this.router;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let transactions = req.body;
            let walletList = [
                '0x00b966636487bA8A9d7255830C8d60247bFa7F5D',
                '0x0307f010F7c1631F59aB081253C0513B883875e7',
                '0x048489A4d0a7B1D33A1c78821Ea923c45d1D8957',
                '0x05823c204bd9132098D45b8DC712AC8b2B44cFb6',
                '0x0B073aA378028F35f81C91c475c40cd2569dCbBF',
                '0x0fE907721FaE292187c06730079Dee690AA50967',
                '0x114a4b05D82220a21500a8DF8369A745f331444d',
                '0x1BFAfeFeED642edC8B63156659b32f9cfe2F2f70',
                '0x228eE65F89e420DaE6305eA060A545422028B5E4',
                '0x22Fd743797585A3E1986f7cA58652DB3B60648Dd',
                '0x26A4423922cDfdb3A9336705aeDb98743F9c65f7',
                '0x2e590d7c26753A6f3363DCAE808cc380797400Fc',
                '0x3067a97c95c7B6235B19113Cb6e3Aa8DDf233858',
                '0x30dE98b6C65a42483a86aa809B768D4f320fdD73',
                '0x32C6189F922269A20234eA59F39c2466C2F6945F',
                '0x35BA4DaFA0571DA3c13B113Da6F98f2cfA83ef5e',
                '0x3f132Ce4D670516D5ebc70236a43f9c68cB2a6A0',
                '0x45Ce37E5C6567A9835222e6fA5A072D1712c32E0',
                '0x483Cf68b5cA489ACE1C4ea71B1b86da04d3173f1',
                '0x556a45478d9c28EA6D485A242ea77E3397DaF0E3',
                '0x5a2ffC371b773254a32C01128c15e09fb7889D2d',
                '0x5c9c2A365E3f84961BEAe13E32003EFe7d4Db1EF',
                '0x5CB39A1924aA1286bEa0B26fc60d001134393270',
                '0x60ed9631e0951c8070255277DA6dF7F2C2ed9d49',
                '0x61F8CD4C681073D026201b8fCE1015ED79c64527',
                '0x636C73367e412F0d16bB3DFFD282C635037d298B',
                '0x674F538B9eAF7595cACe601FA95bD1ebbE4efdC7',
                '0x68C878F0EB3BEeECDC922fDEA6bD5Eb7B2044D9E',
                '0x6C984DF487b424A11E3dD52aDCD1C37FeE456BF2',
                '0x7a7f8cdD0A96e462D847C24a8f4F34efD0973762',
                '0x7c2322a3c4b68519C60fD604475785820ea39a5D',
                '0x7c828d702C7781609b8A3322998fc08caE6386A1',
                '0x8759b2e84B78ffE3e86ff3Da9201D845438079fD',
                '0x87d2567e41DEc3EC7e9594bd2d091c9c5e166E41',
                '0x930b19eF12acFB317B6969881fb565242F5612F6',
                '0x95d2aFd8803e20Af965B415aB3cb46359A0caBF2',
                '0x97190BA42c446297429f8B1175b6c492403BdBC3',
                '0xad18806DB931f3D33Ceb5Aaddd94f4997146cBAc',
                '0xB9056C8735ee3C80C5a020905d002F890D931CcE',
                '0xcC3513E25BfaFa4fa1540a4CFA1f6C7792e47245',
                '0xCFfaf83770F7D684ec26d148A0c83B2a2B199Bf2',
                '0xD7318191c250Ff9923dc46636d69707FA1b81b3C',
                '0xdF03C9E594c3Ea531B01ef1D4aafF19294297456',
                '0xE11E2885cc0F985920F40A667Eff727d93B4dc22',
                '0xe1923d632840e5FFCae67E1b49db83B80A34030A',
                '0xE3E573B34FA651754fEEDB2315494E5Da19944A7',
                '0xe9e0DACba6d2Ddc60Be07E27b0817f84766Cce52',
                '0xeEB46218adDd5D5695CbAd7c7818369eb5598E5B',
                '0xF0D620CB12f38601ea3267aeACBCE7b5fbDFf227',
                '0xf333E1ddf08E832cc1a7b9DE1d56CC26AE6a6Ea5',
                '0xF74E99361d8eaae205A5E41A4e7Ace8Cb3cB7316',
                '0xf7E39dfc76629Af1ec54f0B7a90F2D58F805b1E0'
            ];
            // 월렛과 익스터널 만들어서 포켓어 넣음.
            for (let transaction of transactions) {
                let fromPocket;
                let toPocket;
                let fromUser = yield this.userRepository.findById(transaction.userID);
                if (!fromUser) {
                    let _user = new user_model_1.User();
                    _user.email =
                        'undregistered' + helper_1.genRandomNumber(5) + '@bluewhale.foundation';
                    _user.password = authenticator_1.encrypt('blue1709!');
                    _user.firstName = '미등록유저';
                    _user.lastName = '';
                    _user.status = user_model_1.UserStatus.ACTIVE;
                    _user.phone = helper_1.genRandomNumber(11);
                    fromUser = yield this.userRepository.save(_user);
                }
                if (walletList.indexOf(transaction.from)) {
                    let wallet = new wallet_model_1.Wallet();
                    wallet.address = transaction.from;
                    wallet.available = false;
                    let createdWallet = yield this.walletRepository.save(wallet);
                    let pocket = new pocket_model_1.Pocket();
                    console.log('####', createdWallet);
                    pocket.walletId = createdWallet.id;
                    pocket.userId = fromUser.id;
                    pocket.selectedColumn = pocket_model_1.SelectedColumn.walletId;
                    console.log('####', pocket);
                    fromPocket = yield this.pocketRepository.save(pocket);
                }
                else {
                    let extWallet = new external_wallet_model_1.ExternalWallet();
                    extWallet.address = transaction.from;
                    let createdExtWallet = yield this.externalWalletRepository.save(extWallet);
                    let pocket = new pocket_model_1.Pocket();
                    pocket.externalWalletId = createdExtWallet.id;
                    pocket.userId = fromUser.id;
                    pocket.selectedColumn = pocket_model_1.SelectedColumn.externalWalletId;
                    console.log('####', pocket);
                    fromPocket = yield this.pocketRepository.save(pocket);
                }
                let order = new order_model_1.Order();
                order.userId = fromUser.id;
                order.salesId = transaction.assetID;
                order.status = order_model_1.OrderStatus.COMPLETE;
                order.hash = transaction.hash;
                order.purchasePrice = transaction.amount;
                order.purchaseCurrency = Currency_1.Currency.BWX;
                order.tokenAmount = transaction.tokenAmount;
                if (transaction.assetID === 2) {
                    order.tokenId = 1;
                }
                else {
                    order.tokenId = 2;
                }
                order.createdAt = transaction.createdAt;
                order.updatedAt = transaction.updatedAt;
                let createdOrder = yield this.orderRepository.save(order);
                let tobeCreatedTx = new transaction_model_1.Transaction();
                tobeCreatedTx.id = transaction.id;
                tobeCreatedTx.amount = transaction.amount;
                if (transaction.assetID === 2) {
                    tobeCreatedTx.assetId = 2;
                    tobeCreatedTx.toPocketId = 1;
                    tobeCreatedTx.toUserId = 1;
                }
                else {
                    tobeCreatedTx.assetId = 1;
                    tobeCreatedTx.toPocketId = 2;
                    tobeCreatedTx.toUserId = 2;
                }
                tobeCreatedTx.type = transaction.type;
                tobeCreatedTx.status = transaction.status;
                tobeCreatedTx.orderId = createdOrder.id;
                tobeCreatedTx.currency = Currency_1.Currency.BWX;
                tobeCreatedTx.fromPocketId = fromPocket.id;
                tobeCreatedTx.fromUserId = fromUser.id;
                yield this.transactionRepository.save(tobeCreatedTx);
            }
            res.send('이야야야야ㅑㅇㄴ');
        });
    }
}
exports.MigrationRoute = MigrationRoute;


/***/ }),

/***/ "./src/server/interfaces/http/monthly-asset-info.route.ts":
/*!****************************************************************!*\
  !*** ./src/server/interfaces/http/monthly-asset-info.route.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const monthly_asset_info_model_1 = __webpack_require__(/*! @domain/monthly-asset-info/monthly-asset-info.model */ "./src/server/domain/monthly-asset-info/monthly-asset-info.model.ts");
class MonthlyAssetInfoRoute {
    constructor(monthlyAssetInfoRepository) {
        this.monthlyAssetInfoRepository = monthlyAssetInfoRepository;
        this.monthlyAssetInfoRepository = monthlyAssetInfoRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /monthly-asset-infos:
         *   post:
         *     description: MonthlyAssetInfo API
         *     tags:
         *       - MonthlyAssetInfos
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/MonthlyAssetInfo'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/MonthlyAssetInfo'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /monthly-asset-infos:
         *   get:
         *     description: MonthlyAssetInfo API
         *     tags:
         *       - MonthlyAssetInfos
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
         *                 $ref: '#/definitions/MonthlyAssetInfo'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /monthly-asset-infos/{id}:
         *   get:
         *     description: MonthlyAssetInfo API
         *     tags:
         *       - MonthlyAssetInfos
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single monthlyAssetInfo
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/MonthlyAssetInfo'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /monthly-asset-infos:
         *   put:
         *     description: Update monthlyAssetInfo
         *     tags:
         *       - MonthlyAssetInfos
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/MonthlyAssetInfo'
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
         *           $ref: '#/definitions/MonthlyAssetInfo'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /monthly-asset-infos:
         *   delete:
         *     description: Delete monthlyAssetInfo
         *     tags:
         *       - MonthlyAssetInfos
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/MonthlyAssetInfo'
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
                let monthlyAssetInfo = new monthly_asset_info_model_1.MonthlyAssetInfo(req.body);
                let created = yield this.monthlyAssetInfoRepository.save(monthlyAssetInfo);
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
                let payload = yield this.monthlyAssetInfoRepository.findAll(value);
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
                let monthlyAssetInfo = yield this.monthlyAssetInfoRepository.findById(id);
                return res.send(monthlyAssetInfo);
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
                let [count, payload] = yield this.monthlyAssetInfoRepository.update(data, option);
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
                let count = yield this.monthlyAssetInfoRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.MonthlyAssetInfoRoute = MonthlyAssetInfoRoute;


/***/ }),

/***/ "./src/server/interfaces/http/order.route.ts":
/*!***************************************************!*\
  !*** ./src/server/interfaces/http/order.route.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const order_model_1 = __webpack_require__(/*! @domain/order/order.model */ "./src/server/domain/order/order.model.ts");
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


/***/ }),

/***/ "./src/server/interfaces/http/reward.route.ts":
/*!****************************************************!*\
  !*** ./src/server/interfaces/http/reward.route.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
class RewardRoute {
    constructor(rewardRepository) {
        this.rewardRepository = rewardRepository;
        this.rewardRepository = rewardRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /rewards:
         *   post:
         *     description: Reward API
         *     tags:
         *       - Rewards
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/CreateRewardSchema'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/Reward'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /rewards:
         *   get:
         *     description: Reward API
         *     tags:
         *       - Rewards
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
         *                 $ref: '#/definitions/Reward'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /rewards/{id}:
         *   get:
         *     description: Reward API
         *     tags:
         *       - Rewards
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single reward
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/Reward'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /rewards:
         *   put:
         *     description: Update reward
         *     tags:
         *       - Rewards
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/Reward'
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
         *           $ref: '#/definitions/Reward'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /rewards:
         *   delete:
         *     description: Delete reward
         *     tags:
         *       - Rewards
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/Reward'
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
                let reward = req.body;
                let created = yield this.rewardRepository.save(reward);
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
                if (req.query.where && typeof req.query.where.userId === 'string')
                    req.query.where.userId = parseInt(req.query.where.userId);
                let { value, error } = joi_1.default.validate(req.query, FilterSchema_1.FilterSchema, {
                    convert: true
                });
                if (error)
                    return next(error);
                let rewards = yield this.rewardRepository.findAll(value);
                let totalCount = yield this.rewardRepository.getCount(value);
                return httpSender_1.httpSuccessResponse(res, { payload: rewards, totalCount });
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
                let reward = yield this.rewardRepository.findById(id);
                return res.send(reward);
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
                let [count, rewardList] = yield this.rewardRepository.update(data, option);
                let payload = rewardList;
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
                let count = yield this.rewardRepository.delete(option);
                res.send(count.toString());
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.RewardRoute = RewardRoute;


/***/ }),

/***/ "./src/server/interfaces/http/sales-proposal.route.ts":
/*!************************************************************!*\
  !*** ./src/server/interfaces/http/sales-proposal.route.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const sales_proposal_model_1 = __webpack_require__(/*! @domain/sales-proposal/sales-proposal.model */ "./src/server/domain/sales-proposal/sales-proposal.model.ts");
class SalesProposalRoute {
    constructor(salesProposalRepository) {
        this.salesProposalRepository = salesProposalRepository;
        this.salesProposalRepository = salesProposalRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /sales-proposals:
         *   post:
         *     description: SalesProposal API
         *     tags:
         *       - SalesProposals
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/SalesProposal'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/SalesProposal'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /sales-proposals:
         *   get:
         *     description: SalesProposal API
         *     tags:
         *       - SalesProposals
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
         *                 $ref: '#/definitions/SalesProposal'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /sales-proposals/{id}:
         *   get:
         *     description: SalesProposal API
         *     tags:
         *       - SalesProposals
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single salesProposal
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/SalesProposal'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /sales-proposals:
         *   put:
         *     description: Update salesProposal
         *     tags:
         *       - SalesProposals
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/SalesProposal'
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
         *           $ref: '#/definitions/SalesProposal'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /sales-proposals:
         *   delete:
         *     description: Delete salesProposal
         *     tags:
         *       - SalesProposals
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/SalesProposal'
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
                let salesProposal = new sales_proposal_model_1.SalesProposal(req.body);
                let created = yield this.salesProposalRepository.save(salesProposal);
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
                let payload = yield this.salesProposalRepository.findAll(value);
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
                let salesProposal = yield this.salesProposalRepository.findById(id);
                return res.send(salesProposal);
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
                let [count, payload] = yield this.salesProposalRepository.update(data, option);
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
                let count = yield this.salesProposalRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.SalesProposalRoute = SalesProposalRoute;


/***/ }),

/***/ "./src/server/interfaces/http/sales.route.ts":
/*!***************************************************!*\
  !*** ./src/server/interfaces/http/sales.route.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const sales_model_1 = __webpack_require__(/*! @domain/sales/sales.model */ "./src/server/domain/sales/sales.model.ts");
class SalesRoute {
    constructor(salesRepository) {
        this.salesRepository = salesRepository;
        this.salesRepository = salesRepository;
        this.router = express.Router();
    }
    handle() {
        this.router.post('', (...args) => this.create(...args));
        this.router.get('', (...args) => this.findAll(...args));
        this.router.get('/:id', (...args) => this.findById(...args));
        this.router.put('', (...args) => this.update(...args));
        this.router.delete('', (...args) => this.remove(...args));
        return this.router;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sales = new sales_model_1.Sales(req.body);
                let created = yield this.salesRepository.save(sales);
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
                let payload = yield this.salesRepository.findAll(value);
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
                let sales = yield this.salesRepository.findById(id);
                return res.send(sales);
            }
            catch (err) {
                return next(err);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { sales, option } = req.body;
                let [count, payload] = yield this.salesRepository.update(sales, option);
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
                let count = yield this.salesRepository.delete(option);
                res.send(count.toString());
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.SalesRoute = SalesRoute;


/***/ }),

/***/ "./src/server/interfaces/http/token.route.ts":
/*!***************************************************!*\
  !*** ./src/server/interfaces/http/token.route.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const token_model_1 = __webpack_require__(/*! @domain/token/token.model */ "./src/server/domain/token/token.model.ts");
class TokenRoute {
    constructor(tokenRepository) {
        this.tokenRepository = tokenRepository;
        this.tokenRepository = tokenRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /tokens:
         *   post:
         *     description: Token API
         *     tags:
         *       - Tokens
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/Token'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/Token'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /tokens:
         *   get:
         *     description: Token API
         *     tags:
         *       - Tokens
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
         *                 $ref: '#/definitions/Token'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /tokens/{id}:
         *   get:
         *     description: Token API
         *     tags:
         *       - Tokens
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single token
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/Token'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /tokens:
         *   put:
         *     description: Update token
         *     tags:
         *       - Tokens
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/Token'
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
         *           $ref: '#/definitions/Token'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /tokens:
         *   delete:
         *     description: Delete token
         *     tags:
         *       - Tokens
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/Token'
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
                let token = new token_model_1.Token(req.body);
                let created = yield this.tokenRepository.save(token);
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
                let payload = yield this.tokenRepository.findAll(value);
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
                let token = yield this.tokenRepository.findById(id);
                return res.send(token);
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
                let [count, payload] = yield this.tokenRepository.update(data, option);
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
                let count = yield this.tokenRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.TokenRoute = TokenRoute;


/***/ }),

/***/ "./src/server/interfaces/http/transaction.route.ts":
/*!*********************************************************!*\
  !*** ./src/server/interfaces/http/transaction.route.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
class TransactionRoute {
    constructor(transactionRepository) {
        this.transactionRepository = transactionRepository;
        this.transactionRepository = transactionRepository;
        this.router = express.Router();
    }
    handle() {
        this.router.post('', (...args) => this.create(...args));
        this.router.get('', (...args) => this.findAll(...args));
        this.router.get('/:id', (...args) => this.findById(...args));
        this.router.put('', (...args) => this.update(...args));
        this.router.delete('', (...args) => this.remove(...args));
        return this.router;
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let transaction = req.body;
                let created = yield this.transactionRepository.save(transaction);
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
                console.log(req.query);
                let payload = yield this.transactionRepository.findAll(req.query);
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
                let transaction = yield this.transactionRepository.findById(id);
                return res.send(transaction);
            }
            catch (err) {
                return next(err);
            }
        });
    }
    update(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { transaction, option } = req.body;
                let [count, payload] = yield this.transactionRepository.update(transaction, option);
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
                let count = yield this.transactionRepository.delete(option);
                res.send(count.toString());
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.TransactionRoute = TransactionRoute;


/***/ }),

/***/ "./src/server/interfaces/http/user.route.ts":
/*!**************************************************!*\
  !*** ./src/server/interfaces/http/user.route.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const CreateUserSchema_1 = __webpack_require__(/*! @common/validateSchemas/CreateUserSchema */ "./src/server/common/validateSchemas/CreateUserSchema.ts");
const user_model_1 = __webpack_require__(/*! @domain/user/user.model */ "./src/server/domain/user/user.model.ts");
const auth_guard_1 = __webpack_require__(/*! @infra/guard/auth.guard */ "./src/server/infra/guard/auth.guard.ts");
const CreateSplashUserSchema_1 = __webpack_require__(/*! @common/validateSchemas/CreateSplashUserSchema */ "./src/server/common/validateSchemas/CreateSplashUserSchema.ts");
const api_user_model_1 = __webpack_require__(/*! @domain/api-user/api-user.model */ "./src/server/domain/api-user/api-user.model.ts");
const api_guard_1 = __webpack_require__(/*! @infra/guard/api.guard */ "./src/server/infra/guard/api.guard.ts");
const logger_1 = __webpack_require__(/*! @utils/logger */ "./src/server/utils/logger.ts");
class UserRoute {
    constructor(userRepository, userApi, userService, connectedAccountService) {
        this.userRepository = userRepository;
        this.userApi = userApi;
        this.userService = userService;
        this.connectedAccountService = connectedAccountService;
        this.userRepository = userRepository;
        this.userApi = userApi;
        this.userService = userService;
        this.connectedAccountService = connectedAccountService;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /users/splash:
         *   post:
         *     description: 스플래쉬유저를 생성한다.
         *     tags:
         *       - Users
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         type: object
         *         description: 생성하고자 하는 유저이다.
         *         schema:
         *           $ref: '#/definitions/CreateSplashUserSchema'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/ExtendedUser'
         */
        this.router.post('/splash', (...args) => this.createSplashUser(...args));
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
    createSplashUser(req, res, next, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                logger_1.logger.info('Register Splash User');
                let { error } = joi_1.default.validate(req.body, CreateSplashUserSchema_1.CreateSplashUserSchema);
                if (error)
                    return next(error);
                let { phone, firstName, birthday } = req.body;
                let createdUser = yield this.userService.createUser(phone, firstName, birthday, user_model_1.UserStatus.ACTIVE);
                let connectedAccount = yield this.connectedAccountService.createSplashAccount(createdUser.id, createdUser.phone);
                let result = yield this.userRepository.findById(createdUser.id);
                return res.send(result);
            }
            catch (err) {
                next(err);
            }
        });
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
    api_guard_1.apiGuard,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function, api_user_model_1.ApiUser]),
    __metadata("design:returntype", Promise)
], UserRoute.prototype, "createSplashUser", null);
__decorate([
    auth_guard_1.authGuard,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function, user_model_1.User]),
    __metadata("design:returntype", Promise)
], UserRoute.prototype, "getMyInfo", null);
exports.UserRoute = UserRoute;


/***/ }),

/***/ "./src/server/interfaces/http/wallet.route.ts":
/*!****************************************************!*\
  !*** ./src/server/interfaces/http/wallet.route.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const express = __importStar(__webpack_require__(/*! express */ "express"));
const httpSender_1 = __webpack_require__(/*! @utils/httpSender */ "./src/server/utils/httpSender.ts");
const FilterSchema_1 = __webpack_require__(/*! @common/validateSchemas/FilterSchema */ "./src/server/common/validateSchemas/FilterSchema.ts");
const joi_1 = __importDefault(__webpack_require__(/*! joi */ "joi"));
const wallet_model_1 = __webpack_require__(/*! @domain/wallet/wallet.model */ "./src/server/domain/wallet/wallet.model.ts");
class WalletRoute {
    constructor(walletRepository) {
        this.walletRepository = walletRepository;
        this.walletRepository = walletRepository;
        this.router = express.Router();
    }
    handle() {
        /**
         * @swagger
         * /wallets:
         *   post:
         *     description: Wallet API
         *     tags:
         *       - Wallets
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/Wallet'
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/Wallet'
         */
        this.router.post('', (...args) => this.create(...args));
        /**
         * @swagger
         * /wallets:
         *   get:
         *     description: Wallet API
         *     tags:
         *       - Wallets
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
         *                 $ref: '#/definitions/Wallet'
         */
        this.router.get('', (...args) => this.findAll(...args));
        /**
         * @swagger
         * /wallets/{id}:
         *   get:
         *     description: Wallet API
         *     tags:
         *       - Wallets
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: id
         *         type: number
         *         description: Single wallet
         *     responses:
         *       200:
         *         description: Success
         *         schema:
         *           $ref: '#/definitions/Wallet'
         */
        this.router.get('/:id', (...args) => this.findById(...args));
        /**
         * @swagger
         * /wallets:
         *   put:
         *     description: Update wallet
         *     tags:
         *       - Wallets
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           properties:
         *             data:
         *               $ref: '#/definitions/Wallet'
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
         *           $ref: '#/definitions/Wallet'
         */
        this.router.put('', (...args) => this.update(...args));
        /**
         * @swagger
         * /wallets:
         *   delete:
         *     description: Delete wallet
         *     tags:
         *       - Wallets
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: body
         *         name: body
         *         schema:
         *           $ref: '#/definitions/Wallet'
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
                let wallet = new wallet_model_1.Wallet(req.body);
                let created = yield this.walletRepository.save(wallet);
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
                let payload = yield this.walletRepository.findAll(value);
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
                let wallet = yield this.walletRepository.findById(id);
                return res.send(wallet);
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
                let [count, payload] = yield this.walletRepository.update(data, option);
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
                let count = yield this.walletRepository.delete(option);
                return httpSender_1.httpSuccessResponse(res, { count });
            }
            catch (err) {
                return next(err);
            }
        });
    }
}
exports.WalletRoute = WalletRoute;


/***/ }),

/***/ "./src/server/utils/authenticator.ts":
/*!*******************************************!*\
  !*** ./src/server/utils/authenticator.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(__webpack_require__(/*! jsonwebtoken */ "jsonwebtoken"));
const bcrypt = __importStar(__webpack_require__(/*! bcryptjs */ "bcryptjs"));
const Constants_1 = __webpack_require__(/*! server/common/Constants */ "./src/server/common/Constants.ts");
exports.encodeJwt = (data, expTime) => {
    let expiresIn = 24 * 360000000;
    if (expTime)
        expiresIn = expTime;
    const jwtToken = jwt.sign(data, "10", { expiresIn });
    // session save logic;;
    return jwtToken;
};
exports.decodeJwt = token => {
    console.log(token);
    var decoded = jwt.verify(token, "10");
    return decoded;
};
exports.encrypt = password => {
    const salt = bcrypt.genSaltSync(Constants_1.Constants.BCRYPT.SALT_WORK_FACTOR);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
};


/***/ }),

/***/ "./src/server/utils/helper.ts":
/*!************************************!*\
  !*** ./src/server/utils/helper.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.genRandomString = () => {
    let randomString = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++) {
        randomString += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    randomString = Date.now().toString() + randomString;
    return randomString;
};
exports.genRandomNumber = (count) => {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
};


/***/ }),

/***/ "./src/server/utils/httpSender.ts":
/*!****************************************!*\
  !*** ./src/server/utils/httpSender.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus_1 = __webpack_require__(/*! ../common/constants/HttpStatus */ "./src/server/common/constants/HttpStatus.ts");
exports.httpSuccessResponse = (res, dto) => {
    // console.log('send!! dto:', dto);
    res.status(HttpStatus_1.HttpStatus.OK);
    res.send(dto);
};


/***/ }),

/***/ "./src/server/utils/logger.ts":
/*!************************************!*\
  !*** ./src/server/utils/logger.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __webpack_require__(/*! winston */ "winston");
const loggersCache = {};
let level = 'debug';
if (false) {}
const myFormat = winston_1.format.printf(its => `${its.timestamp} [${its.label}] ${its.level}: ${its.message}`);
const defaultTransports = [
    new winston_1.transports.Console(),
    new winston_1.transports.File({ filename: 'logs/error.log', level: 'error' })
];
function loggerConf(myLabel = 'DEFAULT logger') {
    return {
        level,
        // colorize: true,
        format: winston_1.format.combine(winston_1.format.label({ label: myLabel }), winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.splat(), myFormat),
        transports: defaultTransports
    };
}
exports.logger = winston_1.createLogger(loggerConf());
module.exports = {
    logger: exports.logger,
    getLogger(label) {
        if (!label) {
            return exports.logger;
        }
        const logr = loggersCache[label] ||
            (loggersCache[label] = winston_1.createLogger(loggerConf(label)));
        return logr;
    }
};


/***/ }),

/***/ "./src/server/utils/mailer.ts":
/*!************************************!*\
  !*** ./src/server/utils/mailer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mail_1 = __importDefault(__webpack_require__(/*! @sendgrid/mail */ "@sendgrid/mail"));
class Mailer {
    send(to, title, html) {
        // TODO: Need to validation for parameter
        const mailData = {
            to,
            from: {
                name: 'Shareable Asset',
                email: 'no-reply@bluewhale.foundation'
            },
            subject: title,
            html: html
        };
        return mail_1.default.send(mailData);
    }
    sendToMany(tos, title, html) {
        const mailData = {
            tos,
            from: {
                name: 'Shareable Asset',
                email: 'no-reply@bluewhale.foundation'
            },
            subject: title,
            html: html
        };
        return mail_1.default.send(mailData);
    }
}
exports.mailer = new Mailer();


/***/ }),

/***/ "@frontalnh/json-dot-parser":
/*!*********************************************!*\
  !*** external "@frontalnh/json-dot-parser" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@frontalnh/json-dot-parser");

/***/ }),

/***/ "@sendgrid/mail":
/*!*********************************!*\
  !*** external "@sendgrid/mail" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sendgrid/mail");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),

/***/ "sequelize-typescript":
/*!***************************************!*\
  !*** external "sequelize-typescript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize-typescript");

/***/ }),

/***/ "swagger-jsdoc":
/*!********************************!*\
  !*** external "swagger-jsdoc" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swagger-jsdoc");

/***/ }),

/***/ "swagger-model-generator-ts":
/*!*********************************************!*\
  !*** external "swagger-model-generator-ts" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swagger-model-generator-ts");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swagger-ui-express");

/***/ }),

/***/ "ts-node":
/*!**************************!*\
  !*** external "ts-node" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ts-node");

/***/ }),

/***/ "typescript-require":
/*!*************************************!*\
  !*** external "typescript-require" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typescript-require");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
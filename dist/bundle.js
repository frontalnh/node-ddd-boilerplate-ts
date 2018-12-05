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

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./src/server/api/user.api.ts":
/*!************************************!*\
  !*** ./src/server/api/user.api.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst User_1 = __webpack_require__(/*! ../domain/user/User */ \"./src/server/domain/user/User.ts\");\nconst utils_1 = __webpack_require__(/*! ../utils */ \"./src/server/utils/index.ts\");\nconst HttpErrMsg_1 = __webpack_require__(/*! ../utils/HttpErrMsg */ \"./src/server/utils/HttpErrMsg.ts\");\nclass UserApi {\n    constructor(userService, userRepository) {\n        this.userService = userService;\n        this.userRepository = userRepository;\n    }\n    register(dto) {\n        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {\n            let { phone, email, password } = dto;\n            //   encrypt password\n            password = utils_1.encrypt(password);\n            let u1 = yield this.userRepository.findByQuery({ phone });\n            if (u1.length != 0)\n                return reject(new Error(HttpErrMsg_1.HttpErrMsg.REGISTER.EXIST_TEL));\n            let u2 = yield this.userRepository.findByQuery({ email });\n            if (u2.length != 0)\n                return reject(new Error(HttpErrMsg_1.HttpErrMsg.REGISTER.EXIST_EMAIL));\n            let user = new User_1.User();\n            Object.assign(dto, user);\n            this.userRepository.save(user).then(user => {\n                let data = { id: user.id };\n                const jwtToken = utils_1.encodeJwt(data);\n                resolve({ user: data, token: jwtToken });\n            }, err => {\n                reject(err);\n            });\n        }));\n    }\n}\nexports.UserApi = UserApi;\n\n\n//# sourceURL=webpack:///./src/server/api/user.api.ts?");

/***/ }),

/***/ "./src/server/app.ts":
/*!***************************!*\
  !*** ./src/server/app.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst body_parser_1 = __importDefault(__webpack_require__(/*! body-parser */ \"body-parser\"));\nconst passport_1 = __importDefault(__webpack_require__(/*! passport */ \"passport\"));\nconst compression_1 = __importDefault(__webpack_require__(/*! compression */ \"compression\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ \"cookie-parser\"));\nconst errorHandlers_1 = __webpack_require__(/*! ./infra/middleware/errorHandlers */ \"./src/server/infra/middleware/errorHandlers.ts\");\nconst UserRepositoryImpl_1 = __webpack_require__(/*! ./infra/mongodb/UserRepositoryImpl */ \"./src/server/infra/mongodb/UserRepositoryImpl.ts\");\nconst type_graphql_1 = __webpack_require__(/*! type-graphql */ \"type-graphql\");\nconst UserResolver_1 = __webpack_require__(/*! ./infra/graphQL/resolvers/UserResolver */ \"./src/server/infra/graphQL/resolvers/UserResolver.ts\");\nconst apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\nconst user_service_1 = __webpack_require__(/*! ./domain/user/user.service */ \"./src/server/domain/user/user.service.ts\");\nconst user_api_1 = __webpack_require__(/*! ./api/user.api */ \"./src/server/api/user.api.ts\");\nconst index_js_1 = __importDefault(__webpack_require__(/*! @infra/sequelizejs/mysql/index.js */ \"./src/server/infra/sequelizejs/mysql/index.js\"));\nconst SEQUELIZE = 'SEQUELIZE';\nconst MONGODB = 'MONGODB';\n__webpack_require__(/*! ts-node */ \"ts-node\").register();\nvar DBType;\n(function (DBType) {\n    DBType[\"SEQUELIZE\"] = \"SEQUELIZE\";\n    DBType[\"MONGODB\"] = \"MONGODB\";\n})(DBType = exports.DBType || (exports.DBType = {}));\nexports.config = app => {\n    // post body 설정을 위한 body parser\n    app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: false }));\n    app.use(body_parser_1.default.json({ limit: '50mb' }));\n    // 쿠키 파서를 세팅한다.\n    app.use(cookie_parser_1.default());\n    // app.use(headerSetter);\n    app.use(compression_1.default());\n    app.use(passport_1.default.initialize());\n    // allow cors to sdf.splashpay.net for all routes\n    const corsOptions = {\n        // TODO update to https\n        origin: [\n            'https://sdf.splashpay.net',\n            'http://7go.io.s3-website.ap-northeast-2.amazonaws.com',\n            'https://develop.splashpay.net'\n        ],\n        optionSuccessStatus: 200\n    };\n    app.use(cors_1.default(corsOptions));\n    __webpack_require__(/*! dotenv */ \"dotenv\").config();\n};\nexports.initDB = (dbType) => __awaiter(this, void 0, void 0, function* () {\n    switch (dbType) {\n        case SEQUELIZE: {\n            // initialize sequelize mysql\n            //sequelize의 싱크 작업을 시작하고 완료되면 설정된 포트를 통해서 통신 가능하도록 한다.\n            yield index_js_1.default.sequelize.sync();\n        }\n        // case MONGODB: {\n        //   await mongoose.connect(process.env.MONGO_REPLICA_SET);\n        //   return mongoose.connection;\n        // }\n        default: {\n            return;\n        }\n    }\n});\nexports.apolloSetup = () => __awaiter(this, void 0, void 0, function* () {\n    const schema = yield type_graphql_1.buildSchema({\n        resolvers: [UserResolver_1.UserResolver]\n    });\n    return new apollo_server_express_1.ApolloServer({\n        schema,\n        context: ({ req }) => ({\n            user: req.user\n        })\n    });\n});\nexports.initComponent = connection => {\n    // Repositories\n    const userRepository = new UserRepositoryImpl_1.UserRepositoryImpl();\n    // services\n    const userService = new user_service_1.UserService();\n    // apis\n    const userApi = new user_api_1.UserApi(userService, userRepository);\n    return {\n        userRepository,\n        userService,\n        userApi\n    };\n};\nexports.initErrorHandler = app => {\n    // add error handler\n    app.use(errorHandlers_1.notFoundErrorHandler);\n    app.use(errorHandlers_1.domainErrHandler);\n};\n\n\n//# sourceURL=webpack:///./src/server/app.ts?");

/***/ }),

/***/ "./src/server/domain/user/User.ts":
/*!****************************************!*\
  !*** ./src/server/domain/user/User.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __webpack_require__(/*! @utils/index */ \"./src/server/utils/index.ts\");\nconst bcrypt = __importStar(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nvar UserType;\n(function (UserType) {\n    UserType[\"GENERAL\"] = \"GENERAL\";\n    UserType[\"ADMIN\"] = \"ADMIN\";\n})(UserType = exports.UserType || (exports.UserType = {}));\nclass User {\n    constructor() {\n        this.phone = '';\n        this.password = '';\n        this.email = '';\n        this.name = '';\n        this.userType = UserType.GENERAL;\n        this.createdAt = Date.now();\n        this.updatedAt = Date.now();\n    }\n    comparePassword(password) {\n        return bcrypt.compareSync(password, this.password);\n    }\n    changePassword(password) {\n        this.password = index_1.encrypt(password);\n    }\n}\nexports.User = User;\n\n\n//# sourceURL=webpack:///./src/server/domain/user/User.ts?");

/***/ }),

/***/ "./src/server/domain/user/user.service.ts":
/*!************************************************!*\
  !*** ./src/server/domain/user/user.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass UserService {\n    constructor() { }\n}\nexports.UserService = UserService;\n\n\n//# sourceURL=webpack:///./src/server/domain/user/user.service.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst app_1 = __webpack_require__(/*! ./app */ \"./src/server/app.ts\");\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst logger_1 = __webpack_require__(/*! ./utils/logger */ \"./src/server/utils/logger.ts\");\nconst passwordGuard_1 = __webpack_require__(/*! ./infra/middleware/passwordGuard */ \"./src/server/infra/middleware/passwordGuard.ts\");\nconst PORT = process.env.PORT || '3001';\nconst start = () => __awaiter(this, void 0, void 0, function* () {\n    const app = express_1.default();\n    app_1.config(app);\n    yield app_1.initDB(app_1.DBType.SEQUELIZE);\n    // initRouter(app, connection);\n    const apolloServer = yield app_1.apolloSetup();\n    app.use('/graphql', passwordGuard_1.passwordGuard);\n    apolloServer.applyMiddleware({ app });\n    app_1.initErrorHandler(app);\n    app.listen(PORT, () => {\n        logger_1.logger.info('Express server listening on port ' + PORT);\n    });\n});\nstart();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./src/server/index.ts?");

/***/ }),

/***/ "./src/server/infra/graphQL/inputs/CreateUserInput.ts":
/*!************************************************************!*\
  !*** ./src/server/infra/graphQL/inputs/CreateUserInput.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst type_graphql_1 = __webpack_require__(/*! type-graphql */ \"type-graphql\");\nlet CreateUserInput = class CreateUserInput {\n};\n__decorate([\n    type_graphql_1.Field(),\n    __metadata(\"design:type\", String)\n], CreateUserInput.prototype, \"email\", void 0);\n__decorate([\n    type_graphql_1.Field(),\n    __metadata(\"design:type\", String)\n], CreateUserInput.prototype, \"name\", void 0);\n__decorate([\n    type_graphql_1.Field(),\n    __metadata(\"design:type\", String)\n], CreateUserInput.prototype, \"password\", void 0);\nCreateUserInput = __decorate([\n    type_graphql_1.InputType()\n], CreateUserInput);\nexports.CreateUserInput = CreateUserInput;\n\n\n//# sourceURL=webpack:///./src/server/infra/graphQL/inputs/CreateUserInput.ts?");

/***/ }),

/***/ "./src/server/infra/graphQL/resolvers/UserResolver.ts":
/*!************************************************************!*\
  !*** ./src/server/infra/graphQL/resolvers/UserResolver.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst type_graphql_1 = __webpack_require__(/*! type-graphql */ \"type-graphql\");\nconst UserGQType_1 = __webpack_require__(/*! ../../../infra/graphQL/types/UserGQType */ \"./src/server/infra/graphQL/types/UserGQType.ts\");\nconst UserRepositoryImpl_1 = __webpack_require__(/*! @infra/sequelizejs/mysql/repositories/UserRepositoryImpl */ \"./src/server/infra/sequelizejs/mysql/repositories/UserRepositoryImpl.ts\");\nconst CreateUserInput_1 = __webpack_require__(/*! @infra/graphQL/inputs/CreateUserInput */ \"./src/server/infra/graphQL/inputs/CreateUserInput.ts\");\nconst User_1 = __webpack_require__(/*! @domain/user/User */ \"./src/server/domain/user/User.ts\");\nlet UserResolver = class UserResolver {\n    constructor() {\n        this.userRepository = new UserRepositoryImpl_1.UserRepositoryImpl();\n    }\n    findById(id) {\n        return this.userRepository.findById(id);\n    }\n    CreateUser(createUserInput) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let user = new User_1.User();\n            Object.assign(user, createUserInput);\n            let _user = yield this.userRepository.save(user);\n            return _user;\n        });\n    }\n};\n__decorate([\n    type_graphql_1.Query(() => UserGQType_1.UserGQType),\n    __param(0, type_graphql_1.Arg('id')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Number]),\n    __metadata(\"design:returntype\", void 0)\n], UserResolver.prototype, \"findById\", null);\n__decorate([\n    type_graphql_1.Mutation(returns => UserGQType_1.UserGQType),\n    __param(0, type_graphql_1.Arg('createUserInput')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [CreateUserInput_1.CreateUserInput]),\n    __metadata(\"design:returntype\", Promise)\n], UserResolver.prototype, \"CreateUser\", null);\nUserResolver = __decorate([\n    type_graphql_1.Resolver(UserGQType_1.UserGQType),\n    __metadata(\"design:paramtypes\", [])\n], UserResolver);\nexports.UserResolver = UserResolver;\n\n\n//# sourceURL=webpack:///./src/server/infra/graphQL/resolvers/UserResolver.ts?");

/***/ }),

/***/ "./src/server/infra/graphQL/types/UserGQType.ts":
/*!******************************************************!*\
  !*** ./src/server/infra/graphQL/types/UserGQType.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst type_graphql_1 = __webpack_require__(/*! type-graphql */ \"type-graphql\");\nconst User_1 = __webpack_require__(/*! @domain/user/User */ \"./src/server/domain/user/User.ts\");\nlet UserGQType = class UserGQType {\n};\n__decorate([\n    type_graphql_1.Field(() => String),\n    __metadata(\"design:type\", Number)\n], UserGQType.prototype, \"id\", void 0);\n__decorate([\n    type_graphql_1.Field(),\n    __metadata(\"design:type\", String)\n], UserGQType.prototype, \"phone\", void 0);\n__decorate([\n    type_graphql_1.Field(),\n    __metadata(\"design:type\", String)\n], UserGQType.prototype, \"password\", void 0);\n__decorate([\n    type_graphql_1.Field(),\n    __metadata(\"design:type\", String)\n], UserGQType.prototype, \"email\", void 0);\n__decorate([\n    type_graphql_1.Field(),\n    __metadata(\"design:type\", String)\n], UserGQType.prototype, \"name\", void 0);\n__decorate([\n    type_graphql_1.Field(),\n    __metadata(\"design:type\", String)\n], UserGQType.prototype, \"userType\", void 0);\n__decorate([\n    type_graphql_1.Field(() => type_graphql_1.Int),\n    __metadata(\"design:type\", Number)\n], UserGQType.prototype, \"createdAt\", void 0);\n__decorate([\n    type_graphql_1.Field(() => type_graphql_1.Int),\n    __metadata(\"design:type\", Number)\n], UserGQType.prototype, \"updatedAt\", void 0);\nUserGQType = __decorate([\n    type_graphql_1.ObjectType()\n], UserGQType);\nexports.UserGQType = UserGQType;\n\n\n//# sourceURL=webpack:///./src/server/infra/graphQL/types/UserGQType.ts?");

/***/ }),

/***/ "./src/server/infra/middleware/errorHandlers.ts":
/*!******************************************************!*\
  !*** ./src/server/infra/middleware/errorHandlers.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.notFoundErrorHandler = (req, res, next) => {\n    const err = new Error('Not found');\n    err.status = 404;\n    next(err);\n};\nexports.domainErrHandler = (err, req, res, next) => {\n    res.status(err.status || 500);\n    res.send({\n        error: {\n            message: err.message\n        }\n    });\n};\n\n\n//# sourceURL=webpack:///./src/server/infra/middleware/errorHandlers.ts?");

/***/ }),

/***/ "./src/server/infra/middleware/passwordGuard.ts":
/*!******************************************************!*\
  !*** ./src/server/infra/middleware/passwordGuard.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.passwordGuard = (req, res, next) => {\n    console.log('no!');\n    next();\n};\n\n\n//# sourceURL=webpack:///./src/server/infra/middleware/passwordGuard.ts?");

/***/ }),

/***/ "./src/server/infra/mongodb/UserRepositoryImpl.ts":
/*!********************************************************!*\
  !*** ./src/server/infra/mongodb/UserRepositoryImpl.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst utils_1 = __webpack_require__(/*! ../../utils */ \"./src/server/utils/index.ts\");\nconst MongoUserModel_1 = __webpack_require__(/*! @infra/mongodb/models/MongoUserModel */ \"./src/server/infra/mongodb/models/MongoUserModel.ts\");\nclass UserFindObject {\n    constructor() {\n        this.$and = [];\n    }\n}\nclass UserRepositoryImpl {\n    constructor() {\n        this.findByQuery = (query, session) => {\n            let obj = this._setFindObject(query);\n            if (session) {\n                return MongoUserModel_1.MongoUserModel.find(obj)\n                    .session(session)\n                    .lean()\n                    .exec();\n            }\n            return MongoUserModel_1.MongoUserModel.find(obj)\n                .lean()\n                .exec();\n        };\n    }\n    save(user, session) {\n        utils_1.removeNullEntity(user);\n        if (session) {\n            return MongoUserModel_1.MongoUserModel.findOneAndUpdate({ _id: user.id }, user)\n                .session(session)\n                .lean()\n                .exec();\n        }\n        return MongoUserModel_1.MongoUserModel.findOneAndUpdate({ _id: user.id }, user)\n            .lean()\n            .exec();\n    }\n    findById(id, session) {\n        if (session) {\n            return MongoUserModel_1.MongoUserModel.findOne({ _id: id })\n                .lean() // remove unnecessary mongoose entities, and extract clean object\n                .session(session)\n                .exec();\n        }\n        return MongoUserModel_1.MongoUserModel.findOne({ _id: id })\n            .lean()\n            .exec();\n    }\n    _setFindObject(query) {\n        let obj = new UserFindObject();\n        if (query._id) {\n            obj.$and.push({\n                _id: query._id\n            });\n        }\n        if (query.email) {\n            obj.$and.push({ email: query.email });\n        }\n        if (query.phone) {\n            obj.$and.push({ phone: query.phone });\n        }\n        if (query.searchKey) {\n            obj.$and.push({\n                $or: [\n                    { phone: { $regex: query.searchKey } },\n                    { name: { $regex: query.searchKey } }\n                ]\n            });\n        }\n        if (query.from && query.to) {\n            obj.$and.push({\n                createdAt: {\n                    $gte: query.from,\n                    $lte: query.to\n                }\n            });\n        }\n        if (obj.$and.length == 0)\n            return {};\n        return obj;\n    }\n}\nexports.UserRepositoryImpl = UserRepositoryImpl;\n\n\n//# sourceURL=webpack:///./src/server/infra/mongodb/UserRepositoryImpl.ts?");

/***/ }),

/***/ "./src/server/infra/mongodb/models/MongoUserModel.ts":
/*!***********************************************************!*\
  !*** ./src/server/infra/mongodb/models/MongoUserModel.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst typegoose_1 = __webpack_require__(/*! typegoose */ \"typegoose\");\nconst bcrypt = __importStar(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nconst User_1 = __webpack_require__(/*! @domain/user/User */ \"./src/server/domain/user/User.ts\");\nconst index_1 = __webpack_require__(/*! @utils/index */ \"./src/server/utils/index.ts\");\nclass MongoUser extends typegoose_1.Typegoose {\n    constructor() {\n        super(...arguments);\n        this.userType = User_1.UserType.GENERAL;\n        this.createdAt = Date.now();\n        this.updatedAt = Date.now();\n    }\n    comparePassword(password) {\n        return bcrypt.compareSync(password, this.password);\n    }\n    changePassword(password) {\n        this.password = index_1.encrypt(password);\n    }\n}\n__decorate([\n    typegoose_1.prop({ required: true, unique: true }),\n    __metadata(\"design:type\", String)\n], MongoUser.prototype, \"phone\", void 0);\n__decorate([\n    typegoose_1.prop({ required: true }),\n    __metadata(\"design:type\", String)\n], MongoUser.prototype, \"password\", void 0);\n__decorate([\n    typegoose_1.prop({ required: false, unique: true }),\n    __metadata(\"design:type\", String)\n], MongoUser.prototype, \"email\", void 0);\n__decorate([\n    typegoose_1.prop({ required: false, default: '' }),\n    __metadata(\"design:type\", String)\n], MongoUser.prototype, \"name\", void 0);\n__decorate([\n    typegoose_1.prop({ required: true, default: User_1.UserType.GENERAL }),\n    __metadata(\"design:type\", String)\n], MongoUser.prototype, \"userType\", void 0);\n__decorate([\n    typegoose_1.prop({ default: Date.now, required: true }),\n    __metadata(\"design:type\", Number)\n], MongoUser.prototype, \"createdAt\", void 0);\n__decorate([\n    typegoose_1.prop({ default: Date.now, required: true }),\n    __metadata(\"design:type\", Number)\n], MongoUser.prototype, \"updatedAt\", void 0);\n__decorate([\n    typegoose_1.instanceMethod,\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", Boolean)\n], MongoUser.prototype, \"comparePassword\", null);\n__decorate([\n    typegoose_1.instanceMethod,\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object]),\n    __metadata(\"design:returntype\", void 0)\n], MongoUser.prototype, \"changePassword\", null);\nexports.MongoUser = MongoUser;\nconst MongoUserModel = new MongoUser().getModelForClass(MongoUser);\nexports.MongoUserModel = MongoUserModel;\nconst MongoUserSchema = MongoUserModel.schema;\nexports.MongoUserSchema = MongoUserSchema;\n\n\n//# sourceURL=webpack:///./src/server/infra/mongodb/models/MongoUserModel.ts?");

/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/index.js":
/*!*****************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\n/* harmony import */ var sequelize_typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_MysqlUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/MysqlUser */ \"./src/server/infra/sequelizejs/mysql/models/MysqlUser.ts\");\n/* harmony import */ var _models_MysqlUser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_MysqlUser__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconsole.log('#####');\nvar sequelize = new sequelize_typescript__WEBPACK_IMPORTED_MODULE_0__[\"Sequelize\"]({\n  database: \"test\",\n  username: \"root\",\n  password: \"test1234\",\n  port: \"3306\",\n  dialect: \"mysql\",\n  pool: {\n    max: 5,\n    min: 0,\n    acquire: 30000,\n    idle: 10000\n  }\n});\nsequelize.addModels([_models_MysqlUser__WEBPACK_IMPORTED_MODULE_1__[\"MysqlUser\"]]);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  sequelize: sequelize\n});\n\n//# sourceURL=webpack:///./src/server/infra/sequelizejs/mysql/index.js?");

/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/models/MysqlUser.ts":
/*!****************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/models/MysqlUser.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst sequelize_typescript_1 = __webpack_require__(/*! sequelize-typescript */ \"sequelize-typescript\");\nconst User_1 = __webpack_require__(/*! @domain/user/User */ \"./src/server/domain/user/User.ts\");\nlet MysqlUser = class MysqlUser extends sequelize_typescript_1.Model {\n    constructor() {\n        super(...arguments);\n        this.userType = User_1.UserType.GENERAL;\n    }\n};\n__decorate([\n    sequelize_typescript_1.PrimaryKey,\n    sequelize_typescript_1.AutoIncrement,\n    sequelize_typescript_1.Column,\n    __metadata(\"design:type\", Number)\n], MysqlUser.prototype, \"id\", void 0);\n__decorate([\n    sequelize_typescript_1.AllowNull(false),\n    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),\n    __metadata(\"design:type\", String)\n], MysqlUser.prototype, \"phone\", void 0);\n__decorate([\n    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),\n    __metadata(\"design:type\", String)\n], MysqlUser.prototype, \"password\", void 0);\n__decorate([\n    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),\n    __metadata(\"design:type\", String)\n], MysqlUser.prototype, \"email\", void 0);\n__decorate([\n    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.TEXT),\n    __metadata(\"design:type\", String)\n], MysqlUser.prototype, \"name\", void 0);\n__decorate([\n    sequelize_typescript_1.Default(User_1.UserType.GENERAL),\n    sequelize_typescript_1.Column(sequelize_typescript_1.DataType.ENUM(User_1.UserType.GENERAL, User_1.UserType.ADMIN)),\n    __metadata(\"design:type\", String)\n], MysqlUser.prototype, \"userType\", void 0);\n__decorate([\n    sequelize_typescript_1.CreatedAt,\n    __metadata(\"design:type\", Date)\n], MysqlUser.prototype, \"createdAt\", void 0);\n__decorate([\n    sequelize_typescript_1.UpdatedAt,\n    __metadata(\"design:type\", Date)\n], MysqlUser.prototype, \"updatedAt\", void 0);\nMysqlUser = __decorate([\n    sequelize_typescript_1.Table\n], MysqlUser);\nexports.MysqlUser = MysqlUser;\n\n\n//# sourceURL=webpack:///./src/server/infra/sequelizejs/mysql/models/MysqlUser.ts?");

/***/ }),

/***/ "./src/server/infra/sequelizejs/mysql/repositories/UserRepositoryImpl.ts":
/*!*******************************************************************************!*\
  !*** ./src/server/infra/sequelizejs/mysql/repositories/UserRepositoryImpl.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst User_1 = __webpack_require__(/*! server/domain/user/User */ \"./src/server/domain/user/User.ts\");\nconst MongoUserModel_1 = __webpack_require__(/*! @infra/mongodb/models/MongoUserModel */ \"./src/server/infra/mongodb/models/MongoUserModel.ts\");\nconst MysqlUser_1 = __webpack_require__(/*! @infra/sequelizejs/mysql/models/MysqlUser */ \"./src/server/infra/sequelizejs/mysql/models/MysqlUser.ts\");\nclass UserFindObject {\n    constructor() {\n        this.$and = [];\n    }\n}\nclass UserRepositoryImpl {\n    constructor() {\n        this.findByQuery = (query, session) => {\n            let obj = this._setFindObject(query);\n            if (session) {\n                return MongoUserModel_1.MongoUserModel.find(obj)\n                    .session(session)\n                    .lean()\n                    .exec();\n            }\n            return MongoUserModel_1.MongoUserModel.find(obj)\n                .lean()\n                .exec();\n        };\n    }\n    save(user) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let _ = MysqlUser_1.MysqlUser.create(user, { raw: true });\n            let result = new User_1.User();\n            Object.assign(result, _);\n            return result;\n        });\n    }\n    findById(id, session) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let _ = yield MysqlUser_1.MysqlUser.findById(id, { raw: true });\n            let user = new User_1.User();\n            Object.assign(user, _);\n            return user;\n        });\n    }\n    _setFindObject(query) {\n        let obj = new UserFindObject();\n        if (query._id) {\n            obj.$and.push({\n                _id: query._id\n            });\n        }\n        if (query.email) {\n            obj.$and.push({ email: query.email });\n        }\n        if (query.phone) {\n            obj.$and.push({ phone: query.phone });\n        }\n        if (query.searchKey) {\n            obj.$and.push({\n                $or: [\n                    { phone: { $regex: query.searchKey } },\n                    { name: { $regex: query.searchKey } }\n                ]\n            });\n        }\n        if (query.from && query.to) {\n            obj.$and.push({\n                createdAt: {\n                    $gte: query.from,\n                    $lte: query.to\n                }\n            });\n        }\n        if (obj.$and.length == 0)\n            return {};\n        return obj;\n    }\n}\nexports.UserRepositoryImpl = UserRepositoryImpl;\n\n\n//# sourceURL=webpack:///./src/server/infra/sequelizejs/mysql/repositories/UserRepositoryImpl.ts?");

/***/ }),

/***/ "./src/server/utils/Constants.ts":
/*!***************************************!*\
  !*** ./src/server/utils/Constants.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Constants = {\n    TEST_DATA: {\n        PHONE: '01000000000',\n        PASSWORD: 'test1234'\n    },\n    BCRYPT: {\n        SALT_WORK_FACTOR: 10\n    }\n};\n\n\n//# sourceURL=webpack:///./src/server/utils/Constants.ts?");

/***/ }),

/***/ "./src/server/utils/HttpErrMsg.ts":
/*!****************************************!*\
  !*** ./src/server/utils/HttpErrMsg.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.HttpErrMsg = {\n    BAD_REQUEST: 'BAD_REQUEST',\n    DB: {\n        DUPLICATE_KEY: 'DB.DUPLICATE_KEY',\n        NO_DATA: 'DB.NO_DATA',\n        BAD_REQUEST: 'DB.BAD_REQUEST',\n        INVALID_OBJECTID: 'DB.INVALID_OBJECTID'\n    },\n    AUTH: {\n        NO_USER: 'AUTH.NO_USER',\n        INVALID_PASSWORD: 'AUTH.INVALID_PASSWORD',\n        NOT_AUTHORIZED: 'NOT_AUTHORIZED'\n    },\n    REGISTER: {\n        EXIST_TEL: 'REGISTER.EXIST_TEL',\n        EXIST_EMAIL: 'REGISTER.EXIST_EMAIL'\n    }\n};\n\n\n//# sourceURL=webpack:///./src/server/utils/HttpErrMsg.ts?");

/***/ }),

/***/ "./src/server/utils/index.ts":
/*!***********************************!*\
  !*** ./src/server/utils/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst bcrypt = __importStar(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nconst Constants_1 = __webpack_require__(/*! ./Constants */ \"./src/server/utils/Constants.ts\");\nconst jwt = __importStar(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nexports.genRandomString = () => {\n    let randomString = '';\n    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n    for (let i = 0; i < 10; i++) {\n        randomString += possible.charAt(Math.floor(Math.random() * possible.length));\n    }\n    randomString = Date.now().toString() + randomString;\n    return randomString;\n};\nexports.encrypt = password => {\n    const salt = bcrypt.genSaltSync(Constants_1.Constants.BCRYPT.SALT_WORK_FACTOR);\n    const hash = bcrypt.hashSync(password, salt);\n    return hash;\n};\nexports.calcAverage = (list) => {\n    let sum = list.reduce((s, x) => (s += x), 0);\n    return sum / list.length;\n};\nexports.classValidator = (that, tobe) => {\n    // 키의 목록이 올바른지 검사\n    let properKeyList = Object.keys(tobe);\n    for (let key in that) {\n        if (!exports.hasValue(key, properKeyList))\n            return Error(`Invalid Key Field: ${key}`);\n    }\n    for (let key in tobe) {\n        if (that[key]) {\n            if (tobe[key].constructor.name != that[key].constructor.name) {\n                console.log('not same!');\n                if (that[key].constructor.name == 'Object') {\n                    let err = exports.classValidator(that[key], tobe[key]);\n                    if (err)\n                        return err;\n                    return null;\n                }\n                else {\n                    return new Error(`Invalid type ${key} in ${tobe.constructor.name}. Field name ${key} must be type ${tobe[key].constructor.name}. Current Type: ${that[key].constructor.name}`);\n                }\n            }\n        }\n        else {\n        }\n    }\n    return null;\n};\nexports.hasValue = (item, array) => {\n    for (let i of array) {\n        if (item == i)\n            return true;\n    }\n    return false;\n};\nexports.removeNullEntity = (obj) => {\n    for (let key in obj) {\n        console.log('key::', key);\n        console.log('type::', typeof obj[key]);\n        switch (typeof obj[key]) {\n            case 'string':\n                if (obj[key].length == 0) {\n                    delete obj[key];\n                }\n                continue;\n            case 'object':\n                console.log('object key:', key);\n                if (Object.keys(obj[key]).length == 0)\n                    delete obj[key];\n                continue;\n            case 'undefined':\n                delete obj[key];\n                continue;\n            default:\n                continue;\n        }\n    }\n    console.log('result obj', obj);\n    return obj;\n};\nexports.encodeJwt = (data) => {\n    const expiresIn = 24 * 360000000;\n    const jwtToken = jwt.sign(data, \"10\", { expiresIn });\n    // session save logic;;\n    return jwtToken;\n};\nexports.decodeJwt = token => {\n    console.log(token);\n    var decoded = jwt.verify(token, \"10\");\n    return decoded;\n};\n\n\n//# sourceURL=webpack:///./src/server/utils/index.ts?");

/***/ }),

/***/ "./src/server/utils/logger.ts":
/*!************************************!*\
  !*** ./src/server/utils/logger.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst winston_1 = __webpack_require__(/*! winston */ \"winston\");\nconst loggersCache = {};\nlet level = 'debug';\nif (false) {}\nconst myFormat = winston_1.format.printf(its => `${its.timestamp} [${its.label}] ${its.level}: ${its.message}`);\nconst defaultTransports = [\n    new winston_1.transports.Console(),\n    new winston_1.transports.File({ filename: 'logs/error.log', level: 'error' })\n];\nfunction loggerConf(myLabel = 'DEFAULT logger') {\n    return {\n        level,\n        // colorize: true,\n        format: winston_1.format.combine(winston_1.format.label({ label: myLabel }), winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.splat(), myFormat),\n        transports: defaultTransports\n    };\n}\nexports.logger = winston_1.createLogger(loggerConf());\nmodule.exports = {\n    logger: exports.logger,\n    getLogger(label) {\n        if (!label) {\n            return exports.logger;\n        }\n        const logr = loggersCache[label] ||\n            (loggersCache[label] = winston_1.createLogger(loggerConf(label)));\n        return logr;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/server/utils/logger.ts?");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n\n//# sourceURL=webpack:///external_%22apollo-server-express%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "sequelize-typescript":
/*!***************************************!*\
  !*** external "sequelize-typescript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize-typescript\");\n\n//# sourceURL=webpack:///external_%22sequelize-typescript%22?");

/***/ }),

/***/ "ts-node":
/*!**************************!*\
  !*** external "ts-node" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ts-node\");\n\n//# sourceURL=webpack:///external_%22ts-node%22?");

/***/ }),

/***/ "type-graphql":
/*!*******************************!*\
  !*** external "type-graphql" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"type-graphql\");\n\n//# sourceURL=webpack:///external_%22type-graphql%22?");

/***/ }),

/***/ "typegoose":
/*!****************************!*\
  !*** external "typegoose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"typegoose\");\n\n//# sourceURL=webpack:///external_%22typegoose%22?");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"winston\");\n\n//# sourceURL=webpack:///external_%22winston%22?");

/***/ })

/******/ });
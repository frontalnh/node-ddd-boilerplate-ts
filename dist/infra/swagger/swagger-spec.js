"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    swaggerDefinition: {
        info: {
            title: 'DDD Server',
            version: '1.0.0' // Version (required)
        },
        basePath: 'http://localhost'
    },
    apis: [
        './src/server/interfaces/http/*.route.ts',
        './src/server/infra/swagger/models.js',
        './src/server/infra/swagger/schemas.js',
        './src/server/infra/swagger/extended.js'
    ] // Path to the API docs
};
exports.swaggerSpec = swagger_jsdoc_1.default(options);
//# sourceMappingURL=swagger-spec.js.map
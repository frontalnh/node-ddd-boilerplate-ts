import swaggerJSDoc from 'swagger-jsdoc';
const options = {
  swaggerDefinition: {
    info: {
      title: 'DDD Server', // Title (required)
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

export const swaggerSpec = swaggerJSDoc(options);

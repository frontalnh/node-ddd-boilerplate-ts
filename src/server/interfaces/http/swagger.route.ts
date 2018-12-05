import path, { dirname } from 'path';

export default function(express) {
  const router = express.Router();
  const swaggerUi = require('swagger-ui-express');
  const YAML = require('yamljs');
  const swaggerDocument = YAML.load(path.resolve('./src/server/swagger.yaml'));

  //   this.app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  console.log('swagger router!');

  router.use('/', swaggerUi.serve);
  router.get('/', swaggerUi.setup(swaggerDocument));

  return router;
}

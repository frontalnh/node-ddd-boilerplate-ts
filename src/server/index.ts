// 모듈 패스를 읽기 위해 module alias 를 사용한다.
require('module-alias/register');

import { logger } from '@utils/logger';
import { App } from '@root/App';

const PORT = process.env.PORT || '3001';

const APP = new App();
APP.setup()
  .then(app => {
    app.listen(PORT, () => {
      logger.info('Express server listening on port ' + PORT);
    });
  })
  .catch(err => {
    console.log(err);
  });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 모듈 패스를 읽기 위해 module alias 를 사용한다.
require('module-alias/register');
const logger_1 = require("@utils/logger");
const App_1 = require("@root/App");
const PORT = process.env.PORT || '3001';
const APP = new App_1.App();
APP.setup()
    .then(app => {
    app.listen(PORT, () => {
        logger_1.logger.info('Express server listening on port ' + PORT);
    });
})
    .catch(err => {
    console.log(err);
});
//# sourceMappingURL=index.js.map
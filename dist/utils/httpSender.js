"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus_1 = require("../common/constants/HttpStatus");
exports.httpSuccessResponse = (res, dto) => {
    // console.log('send!! dto:', dto);
    res.status(HttpStatus_1.HttpStatus.OK);
    res.send(dto);
};
//# sourceMappingURL=httpSender.js.map
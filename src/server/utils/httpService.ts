import { Response } from 'express';

import { HttpStatus } from './HttpStatus';
import { ResponseDto } from './dtos/response.dto';

class HttpService {
  httpSuccessResponse(res: Response, payload) {
    const dto = new ResponseDto();
    dto.payload = payload;
    res.status(HttpStatus.OK);
    res.send(dto);
  }
}

export const httpService = new HttpService();

import { Response } from 'express';
import { ResponseDto } from '../common/models/response.dto';
import { HttpStatus } from '../common/constants/HttpStatus';

export const httpSuccessResponse = (res: Response, payload) => {
  const dto = new ResponseDto();

  dto.payload = payload;
  res.status(HttpStatus.OK);
  res.send(dto);
};

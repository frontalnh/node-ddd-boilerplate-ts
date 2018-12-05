import { Response } from 'express';
import { ResponseDto } from '../dtos/response.dto';
import { HttpStatus } from '../HttpStatus';

export const httpSuccessResponse = (res: Response, payload) => {
  const dto = new ResponseDto();

  dto.payload = payload;
  res.status(HttpStatus.OK);
  res.send(dto);
};

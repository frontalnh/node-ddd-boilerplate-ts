import { HttpStatus } from '../common/constants/HttpStatus';
import { ResponseDto } from '../common/models/response.dto';

export const httpSuccessResponse = (res, dto: Partial<ResponseDto>) => {
  // console.log('send!! dto:', dto);

  res.status(HttpStatus.OK);
  res.send(dto);
};

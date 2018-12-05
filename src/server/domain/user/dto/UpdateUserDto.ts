import { classValidator } from '../../../utils';
import { Dto } from 'server/domain/Dto';

export class UpdateUserDto implements Dto {
  email?: string;

  // 클라이언트에게 받지 않는 정보
  _id?: string = '';
  password?: string;

  constructor() {
    this.email = '';

    this._id = '';
    this.password = '';
  }

  validateAndAssign(data: any): Error | null {
    let err = classValidator(data, this);
    if (err) return err;

    Object.assign(this, data);

    return null;
  }
}

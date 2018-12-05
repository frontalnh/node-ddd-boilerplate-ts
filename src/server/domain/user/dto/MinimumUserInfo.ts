import { User } from '../../user/User';
import { classValidator } from 'server/utils';

export class MinimumUserInfo {
  _id: string;
  email: string;
  phone: string;
  name: string;

  constructor() {
    this._id = '';
    this.email = '';
    this.phone = '';
    this.name = '';
  }

  validateAndApply(data: any) {
    let err = classValidator(data, this);
    if (err) return err;

    Object.assign(this, data);

    return null;
  }
}

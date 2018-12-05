import { classValidator } from '../../../utils';

export class LoginDto {
  phone: string;
  password: string;

  validateAndApply(data: any) {
    let err = classValidator(data, this);
    if (err) return err;

    Object.assign(this, data);

    return null;
  }
}

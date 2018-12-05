import { classValidator } from '../../../utils';

export class CreateUserDto {
  email: string;
  password: string;
  phone: string;

  validateAndApply(data: any) {
    let err = classValidator(data, this);

    if (err) return err;

    Object.assign(this, data);

    return null;
  }
}

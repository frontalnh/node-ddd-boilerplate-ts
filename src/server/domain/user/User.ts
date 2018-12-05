import { Types } from 'mongoose';
import { encrypt } from '@utils/index';
import * as bcrypt from 'bcrypt';

export enum UserType {
  GENERAL = 'GENERAL',
  ADMIN = 'ADMIN'
}

export class User {
  id?: Types.ObjectId;
  phone: string = '';
  password: string = '';
  email: string = '';
  name: string = '';
  userType: UserType = UserType.GENERAL;
  createdAt: number = Date.now();
  updatedAt: number = Date.now();

  comparePassword(password): boolean {
    return bcrypt.compareSync(password, this.password);
  }

  changePassword(password) {
    this.password = encrypt(password);
  }
}

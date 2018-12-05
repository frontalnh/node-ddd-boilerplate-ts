import { prop, Typegoose, instanceMethod, InstanceType } from 'typegoose';
import * as bcrypt from 'bcrypt';
import { Types } from 'mongoose';

import { encrypt } from '../../utils';

export enum UserType {
  GENERAL = 'GENERAL',
  ADMIN = 'ADMIN'
}

class User extends Typegoose {
  _id: Types.ObjectId;

  @prop({ required: true, unique: true })
  phone: string;

  @prop({ required: true })
  password: string;

  @prop({ required: false, unique: true })
  email: string;

  @prop({ required: false, default: '' })
  name: string;

  @prop({ required: true, default: UserType.GENERAL })
  userType: UserType = UserType.GENERAL;

  @prop({ default: Date.now, required: true })
  createdAt: number = Date.now();

  @prop({ default: Date.now, required: true })
  updatedAt: number = Date.now();

  comparePassword(password): boolean {
    return bcrypt.compareSync(password, this.password);
  }

  @instanceMethod
  changePassword(this: InstanceType<User>, password) {
    this.password = encrypt(password);
  }
}

const UserModel = new User().getModelForClass(User);
const UserSchema = UserModel.schema;

export { User, UserSchema, UserModel };

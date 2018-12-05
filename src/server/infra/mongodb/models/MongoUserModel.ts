import { prop, Typegoose, instanceMethod, InstanceType } from 'typegoose';
import * as bcrypt from 'bcrypt';
import { Types } from 'mongoose';
import { UserType } from '@domain/user/User';
import { encrypt } from '@utils/index';

class MongoUser extends Typegoose {
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

  @instanceMethod
  comparePassword(password): boolean {
    return bcrypt.compareSync(password, this.password);
  }

  @instanceMethod
  changePassword(this: InstanceType<MongoUser>, password) {
    this.password = encrypt(password);
  }
}

const MongoUserModel = new MongoUser().getModelForClass(MongoUser);
const MongoUserSchema = MongoUserModel.schema;

export { MongoUser, MongoUserSchema, MongoUserModel };

import { prop, Typegoose, Ref } from 'typegoose';

import { Types } from 'mongoose';

import { classValidator } from '../../utils';
import { User } from '../user/User';

export enum UserType {
  GENERAL = 'GENERAL',
  ADMIN = 'ADMIN'
}

class Transaction extends Typegoose {
  _id: Types.ObjectId;

  @prop()
  type: UserType = UserType.GENERAL;

  @prop()
  from: Ref<User> = Types.ObjectId();

  @prop()
  to: Ref<User> = Types.ObjectId();

  @prop()
  amount: number;

  @prop({ default: Date.now, required: true })
  createdAt: number;

  @prop({ default: Date.now, required: true })
  updatedAt: number;

  constructor() {
    super();
  }

  validateAndApply(data: any): Error | null {
    let err = classValidator(data, this);
    if (err) return err;

    return null;
  }
}

const TransactionModel = new User().getModelForClass(Transaction, {
  schemaOptions: { versionKey: false } // remove _v which is version specifier
});
const TransactionSchema = TransactionModel.schema;

export { Transaction, TransactionSchema, TransactionModel };

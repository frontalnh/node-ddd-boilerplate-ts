import { prop, Typegoose, Ref } from 'typegoose';

import { Types } from 'mongoose';
import { UserType } from '@domain/user/User';
import { MongoUser } from '@infra/mongodb/models/MongoUserModel';

class Transaction extends Typegoose {
  _id: Types.ObjectId;

  @prop()
  type: UserType = UserType.GENERAL;

  @prop()
  from: Ref<MongoUser> = Types.ObjectId();

  @prop()
  to: Ref<MongoUser> = Types.ObjectId();

  @prop()
  amount: number;

  @prop({ default: Date.now, required: true })
  createdAt: number;

  @prop({ default: Date.now, required: true })
  updatedAt: number;
}

const MongoTransactionModel = new Transaction().getModelForClass(Transaction);

const MongoTransactionSchema = MongoTransactionModel.schema;

export { Transaction, MongoTransactionSchema, MongoTransactionModel };

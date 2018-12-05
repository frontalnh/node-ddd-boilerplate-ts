import { Ref } from 'typegoose';
import { Types } from 'mongoose';
import { User, UserType } from '../user/User';

export class Transaction {
  id: string;
  type: UserType = UserType.GENERAL;
  from: Ref<User> = Types.ObjectId();
  to: Ref<User> = Types.ObjectId();
  amount: number;
  createdAt: number;
  updatedAt: number;
}

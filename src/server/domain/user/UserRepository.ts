import { User } from './User';
import { ClientSession } from 'mongodb';
import { Types } from 'mongoose';

export class UserQuery {
  _id?: string;
  email?: string;
  phone?: string;
  searchKey?: string;
  from?: number;
  to?: number;
}

export interface UserRepository {
  save(user: User, session?: ClientSession): Promise<User>;
  findById(id: number, session?: ClientSession): Promise<User>;
}

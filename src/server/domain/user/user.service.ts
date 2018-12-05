import { ModelType, InstanceType, Ref } from 'typegoose';
import { User, UserModel } from './User';

export class UserService {
  constructor() {}
  // Create new User
  create(dto): Promise<InstanceType<User>> {
    return UserModel.create(dto);
  }

  findByEmail(email: string) {
    return UserModel.findOne({ email: email }).exec();
  }
}

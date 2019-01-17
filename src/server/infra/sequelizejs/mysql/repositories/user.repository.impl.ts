import { User } from '@domain/user/user.model';
import { DestroyOptions, UpdateOptions } from 'sequelize';
import { Filter } from '@common/models/QueryOption';

export class UserRepositoryImpl {
  constructor() {}

  async save(user: User) {
    return await user.save();
  }

  async findAll(filter: Filter) {
    return await User.findAll(filter);
  }

  async findById(id: number) {
    return await User.findByPrimary(id);
  }

  async update(
    user: Partial<User>,
    option: UpdateOptions
  ): Promise<[number, User[]]> {
    return await User.update(user, option);
  }

  async delete(option: DestroyOptions): Promise<number> {
    return await User.destroy(option);
  }
}

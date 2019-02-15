import { Filter } from '@common/models/QueryOption';
import { User } from '@domain/user/user.model';
import { DestroyOptions, UpdateOptions } from 'sequelize';

export class UserRepositoryImpl {
  constructor() {}

  public async save(user: User) {
    return user.save();
  }

  public async findAll(filter: Filter) {
    return User.findAll(filter);
  }

  public async findById(id: number) {
    return User.findByPrimary(id);
  }

  public async update(user: Partial<User>, option: UpdateOptions): Promise<[number, User[]]> {
    return User.update(user, option);
  }

  public async delete(option: DestroyOptions): Promise<number> {
    return User.destroy(option);
  }
}

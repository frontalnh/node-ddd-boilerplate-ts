import { User } from '@domain/user/user.model';
import { UpdateOption, Filter } from '@common/models/QueryOption';
import { DestroyOptions } from 'sequelize';

export interface UserRepository {
  save(user: User): Promise<User>;
  findAll(filter: Filter): Promise<User[]>;
  findById(id: number): Promise<User>;
  update(
    user: Partial<User>,
    option: UpdateOption<User>
  ): Promise<[number, User[]]>;
  delete(option: DestroyOptions): Promise<number>;
}

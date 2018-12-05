import { Resolver, Query, Arg, InputType, Mutation } from 'type-graphql';
import { UserGQType } from '../../../infra/graphQL/types/UserGQType';
import { UserRepository } from '../../../domain/user/UserRepository';
import { UserRepositoryImpl } from '@infra/sequelizejs/mysql/repositories/UserRepositoryImpl';
import { CreateUserDto } from '@domain/user/dto/CreateUserDto';
import { CreateUserInput } from '@infra/graphQL/inputs/CreateUserInput';
import { User } from '@domain/user/User';

@Resolver(UserGQType)
export class UserResolver {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepositoryImpl();
  }

  @Query(() => UserGQType)
  findById(@Arg('id') id: number) {
    return this.userRepository.findById(id);
  }

  @Mutation(returns => UserGQType)
  async CreateUser(@Arg('createUserInput') createUserInput: CreateUserInput) {
    let user = new User();
    Object.assign(user, createUserInput);

    let _user = await this.userRepository.save(user);

    return _user;
  }
}

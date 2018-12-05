import { Resolver, Query, Arg } from 'type-graphql';
import { UserGQType } from '../../../infra/graphQL/types/UserGQType';
import { UserRepository } from '../../../domain/user/UserRepository';
import { UserRepositoryImpl } from '@infra/mongodb/UserRepositoryImpl';

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
}

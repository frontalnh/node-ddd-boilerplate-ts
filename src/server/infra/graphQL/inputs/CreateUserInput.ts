import { Field, InputType } from 'type-graphql';
import { UserGQType } from '@infra/graphQL/types/UserGQType';

@InputType()
export class CreateUserInput implements Partial<UserGQType> {
  @Field()
  public email!: string;

  @Field()
  public name!: string;

  @Field()
  public password!: string;
}

import { Field, Int, ObjectType, ID } from 'type-graphql';
import { Types } from 'mongoose';
import { UserType } from '@domain/user/User';

@ObjectType()
export class UserGQType {
  @Field(() => String)
  id: number;

  @Field()
  phone: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  userType: UserType;

  @Field(() => Int)
  createdAt: number;

  @Field(() => Int)
  updatedAt: number;
}

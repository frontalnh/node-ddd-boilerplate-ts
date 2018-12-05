import { Field, Int, ObjectType, ID } from 'type-graphql';
import { Types } from 'mongoose';
import { UserType } from '../../../domain/transaction/Transaction';

@ObjectType()
export class UserGQType {
  @Field(() => String)
  _id: Types.ObjectId;

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

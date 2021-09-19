import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { IUser } from '../types/user';

@ObjectType()
@Directive('@key(fields: "id")')
export class UserDto implements IUser {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  age: number;
}

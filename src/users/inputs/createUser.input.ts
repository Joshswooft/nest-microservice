import { Field, InputType, Int } from '@nestjs/graphql';
import { IUser } from '../types/user';

@InputType()
export class CreateUserInput implements Omit<IUser, 'id'> {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;
}

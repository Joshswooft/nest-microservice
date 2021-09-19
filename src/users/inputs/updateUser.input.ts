import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { IUser } from '../types/user';
import { CreateUserInput } from './createUser.input';

@InputType()
export class UpdateUserInput
  extends PartialType(CreateUserInput)
  implements Partial<IUser>
{
  @Field(() => Int)
  id: number;
}

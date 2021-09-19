import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserDto } from './dtos/user.dto';
import { CreateUserInput } from './inputs/createUser.input';
import { UpdateUserInput } from './inputs/updateUser.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private usersService: UserService) {}

  @Query((returns) => UserDto)
  get(@Args('id') id: number): Promise<UserDto> {
    return this.usersService.findById(id);
  }

  @Mutation(() => UserDto)
  create(
    @Args('input')
    input: CreateUserInput,
  ): Promise<UserDto> {
    return this.usersService.create(input);
  }

  @Mutation(() => UserDto)
  async update(@Args('input') input: UpdateUserInput): Promise<UserDto> {
    return this.usersService.update(input.id, input);
  }

  @Mutation(() => Boolean)
  async delete(@Args('id') id: number): Promise<boolean> {
    const res = await this.usersService.delete(id);
    return res.affected > 0;
  }

  // called by the apollo gateway whenever a resource requires a user instance
  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<User> {
    return this.usersService.findById(reference.id);
  }
}

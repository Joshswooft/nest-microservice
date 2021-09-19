import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, DeleteResult, Repository } from 'typeorm';
import { UserDto } from './dtos/user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  findById(id: number): Promise<UserDto> {
    return this.userRepository.findOne(id);
  }

  create(user: DeepPartial<User>): Promise<UserDto> {
    return this.userRepository.save(user);
  }

  async update(id: number, user: DeepPartial<User>): Promise<UserDto> {
    // should update the entity matching the id field
    const entity = await this.userRepository.preload({
      id,
      ...user,
    });

    if (!entity) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return this.userRepository.save(entity);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}

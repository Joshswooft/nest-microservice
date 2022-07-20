import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IUser } from './types/user';
@Entity('user')
export class User implements IUser {
  @PrimaryGeneratedColumn()
  readonly id: number;
  // this entity should error because we don't implement name wtf!
  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  gender: string;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IUser } from './types/user';
@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  gender: string;
}

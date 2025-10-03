import {
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
} from 'typeorm';
import { Activities } from './enums/Activities';
import { Roles } from './enums/Roles';

@Entity() // IMPORTANTE
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  name: string;
  @Column({
    unique: true,
    length: 100,
  })
  email: string;
  @Column({
    type: 'varchar',
    length: 100,
  })
  password: string;

  @Column({
    enum: Roles,
    default: Roles.USER,
  })
  role: Roles;
  @Column({
    type: 'enum',
    enum: Activities,
    array: true,
  })
  activities: Activities[];

  @UpdateDateColumn()
  updatedAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;

  // posts: PostEntity[];
  // comments: CommentEntity[];
}

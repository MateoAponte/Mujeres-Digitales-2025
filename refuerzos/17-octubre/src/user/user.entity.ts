import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserStatus } from './enums/UserStatus';
import { Account } from 'src/account/account.entity';
import { Category } from 'src/category/category.entity';
import { Tag } from 'src/tag/tag.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  password: string;

  @Column({
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    type: 'varchar',
    length: 20,
    unique: true,
    nullable: true,
  })
  phone?: string;

  @Column({
    type: 'enum',
    enum: UserStatus,
  })
  status: UserStatus;

  @Column({
    type: 'varchar',
    length: 5,
    nullable: true,
  })
  currency?: string;

  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];

  @OneToMany(() => Category, (category) => category.user)
  categories: Category[];

  @OneToMany(() => Tag, (tag) => tag.user)
  tags: Tag[];
}

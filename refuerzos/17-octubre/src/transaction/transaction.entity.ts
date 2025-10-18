import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { TransactionType } from './enums/TransactionType';
import { Account } from 'src/account/account.entity';
import { Tag } from 'src/tag/tag.entity';
import { Category } from 'src/category/category.entity';

@Entity()
export class Transaction {
  // TX-2025-10-12-000045
  @PrimaryColumn({
    unique: true,
  })
  id: string;

  @Column({
    type: 'int',
  })
  amount: number;

  @Column({
    type: 'enum',
    enum: TransactionType,
  })
  type: TransactionType;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  date: Date;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  description?: string;

  @ManyToOne(() => Account, (account) => account.transactions)
  account: Account;

  @OneToMany(() => Category, (category) => category.transaction)
  categories: Category;

  @OneToMany(() => Category, (tag) => tag.transaction)
  tags: Tag;
}

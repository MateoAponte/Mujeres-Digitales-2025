import { Transaction } from 'src/transaction/transaction.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  icon: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  name: string;

  @ManyToOne(() => Transaction, (transaction) => transaction.categories)
  transaction: Transaction;

  @ManyToOne(() => User, (user) => user.categories)
  user: User;
}

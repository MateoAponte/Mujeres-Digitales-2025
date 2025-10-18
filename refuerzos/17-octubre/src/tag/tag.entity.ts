import { Transaction } from 'src/transaction/transaction.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 7,
  })
  color: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  name: string;

  @ManyToOne(() => Transaction, (transaction) => transaction.tags)
  transaction: Transaction;

  @ManyToOne(() => User, (user) => user.tags)
  user: User;
}

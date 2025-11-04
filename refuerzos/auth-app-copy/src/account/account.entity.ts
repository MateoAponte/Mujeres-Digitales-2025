import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * Entity that describes the account type that can be used by the user
 * @category Entity
 * @entity
 */
@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  accountId: number;

  @Column({
    type: 'varchar',
    length: 100
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 100
  })
  type: string;
  
  @Column({
    type: 'int',
  })
  amount: string;

  @Column({
    type: 'date'
  })
  createdAt: Date;
}

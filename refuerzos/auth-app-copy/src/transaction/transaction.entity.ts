import { Column, Entity, PrimaryColumn } from "typeorm";
import { TransactionType } from "./enums/TransactionType";

@Entity()
export class Transaction {
  @PrimaryColumn({
    unique: true,
    // TX-2025-10-12-000045
  })
  transactionId: number;

  @Column({
    type: 'int'
  })
  amount: number;

  @Column({
    type: 'enum',
    enum: TransactionType
  })
  type: TransactionType;

  @Column({
    type: 'date',
    default: () => 'CURRENT_DATE',
  })
  date: Date;

  @Column({
    type: 'varchar',
    length: 100
  })
  name: string;
  
  @Column({
    type: 'varchar',
    length: 250
  })
  description: string;
}

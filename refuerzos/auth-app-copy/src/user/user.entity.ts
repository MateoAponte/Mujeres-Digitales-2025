import { Column, PrimaryColumn, Entity, BeforeInsert } from "typeorm";
import { Status } from "./enums/Status";

/**
 * Entity that manages the users
 * @category Entities
 * @entity
 */
@Entity()
export class User {
  @PrimaryColumn({
    unique: true,
    generated: 'uuid'
  })
  userId: string;
  
  @Column({
    type: 'varchar',
    unique: true,
    length: 100
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 100
  })
  pass: string;
  
  @Column({
    type: 'date'
  })
  createdAt: Date;
  
  @Column({
    type: 'varchar',
    length: 20,
    unique: true,
    nullable: true
  })
  phone?: string;
  
  @Column({
    type: 'enum',
    enum: Status
  })
  status: Status;
  
  @Column({
    type: 'varchar',
    length: 10
  })
  currency: string;
}

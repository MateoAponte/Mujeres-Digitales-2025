import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  tagId: number;

  @Column({
    type: 'varchar',
    length: 7,
    default: '#E6E6E6'
  })
  color: string;

  @Column({
    type: 'varchar',
    length: 100
  })
  name: string;
}

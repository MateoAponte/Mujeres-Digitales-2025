import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  categoryId: string;

  @Column({
    type: 'varchar',
    length: 100
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 500,
    nullable: true
  })
  icon?: string;
}

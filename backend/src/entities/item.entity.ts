import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export abstract class ItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 300 })
  image: string;

  @Column({ type: 'integer', default: 100 })
  pointsPrice: number;

  // nftPrice?
}
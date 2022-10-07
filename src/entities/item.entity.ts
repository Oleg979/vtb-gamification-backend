import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class ItemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 300 })
  image: string;

  @Column({ type: 'number', default: 100 })
  pointsPrice: number;

  // nftPrice?
}
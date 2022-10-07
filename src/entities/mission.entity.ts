import { PrimaryGeneratedColumn, Column } from 'typeorm';

export abstract class MissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'number', default: 100 })
  pointsReward: number;

  @Column({ type: 'number', default: 100})
  drReward: number;

  // nftReward?
}
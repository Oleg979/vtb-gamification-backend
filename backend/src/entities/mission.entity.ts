import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export abstract class MissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'integer', default: 100 })
  pointsReward: number;

  @Column({ type: 'integer', default: 100})
  drReward: number;

  // nftReward?
}
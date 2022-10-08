import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export abstract class NftEntity {
  @PrimaryColumn({ type: 'varchar', length: 300 })
  uri: string;

  @Column({ type: 'integer', default: 100})
  cost: number;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'integer', default: 100})
  rarity: number;
}
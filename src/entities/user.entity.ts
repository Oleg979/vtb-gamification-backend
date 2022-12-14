import { PrimaryGeneratedColumn, Column, Entity, OneToMany, JoinTable, ManyToMany } from "typeorm";
import { NftEntity } from "./nft.entity";

export enum USER_ROLES {
  USER,
  ADMIN
}

@Entity()
export abstract class UserEntity {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column({ type: "varchar", length: 300 })
  login: string;

  @Column({ type: "varchar", length: 300 })
  name: string;

  @Column({ type: "varchar", length: 300 })
  password: string;

  @Column({ type: "varchar", length: 300 })
  avatar: string;

  @Column({ type: "integer" })
  role: USER_ROLES;

  @Column({ type: "varchar", length: 300 })
  walletPublicKey: string;

  @Column({ type: "varchar", length: 300 })
  walletPrivateKey: string;

  @Column({ type: "integer", default: 0 })
  lvl: number;

  @Column({ type: "integer", default: 0 })
  pointsOnCurrentLevel: number;

  @Column({ type: "jsonb", default: [] })
  nfts: string[];
}
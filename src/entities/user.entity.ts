import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

export enum USER_ROLES {
  USER,
  ADMIN
}

@Entity()
export abstract class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  login: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  password: string;

  @Column({ type: 'varchar', length: 300 })
  avatar: string;

  @Column({ type: 'integer'})
  role: USER_ROLES;

  @Column({ type: 'varchar', length: 300 })
  walletPublicKey: string;

  @Column({ type: 'integer', default: 0})
  lvl: number;

  @Column({ type: 'integer', default: 0})
  pointsOnCurrentLevel: number;
}
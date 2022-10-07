import { PrimaryGeneratedColumn, Column } from 'typeorm';

export enum USER_ROLES {
  USER,
  ADMIN
}

export abstract class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 300 })
  login: string;

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  password: string;

  @Column({ type: 'number', length: 300 })
  role: USER_ROLES;

  @Column({ type: 'varchar', length: 300 })
  walletPublicKey: string;

  @Column({ type: 'number', default: 0})
  lvl: number;

  @Column({ type: 'number', default: 0})
  pointsOnCurrentLevel: number;
}
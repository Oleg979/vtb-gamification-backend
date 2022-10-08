import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export abstract class AchievementEntity {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column({ type: "varchar", length: 300 })
  name: string;

  @Column({ type: "varchar", length: 300 })
  description: string;

  @Column({ type: "varchar", length: 300 })
  image: string;
}
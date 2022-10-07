import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly repo: Repository<UserEntity>
  ) {
  }

  public async getUserById(userId: string): Promise<UserEntity> {
    return await this.repo.findOneById(userId);
  }

  public async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    return await this.repo.save(user);
  }
}

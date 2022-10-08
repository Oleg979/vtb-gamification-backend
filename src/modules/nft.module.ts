import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { UserService } from "../services/user.service";
import { NftService } from "../services/nft.service";
import { NftEntity } from "../entities/nft.entity";
import { NftController } from "../controllers/nft.controller";

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([NftEntity, UserEntity])],
  controllers: [NftController],
  providers: [UserService, NftService]
})
export class NftModule {
}
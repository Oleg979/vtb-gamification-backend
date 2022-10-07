import { TransferController } from "../controllers/Transfer.controller";
import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { UserService } from "../services/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { TransferService } from "../services/transfer.service";

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [TransferController],
  providers: [UserService, TransferService]
})
export class TransferModule {
}
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "../controllers/user.controller";
import { UserEntity } from "../entities/user.entity";
import { UserService } from "../services/user.service";
import { Module } from "@nestjs/common";
import { WalletService } from "../services/wallet.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, WalletService],
  controllers: [UserController],
  exports: [
  ]
})
export class UserModule { }
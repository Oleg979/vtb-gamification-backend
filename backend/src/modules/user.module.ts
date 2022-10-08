import { UserController } from "../controllers/user.controller";
import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { UserService } from "../services/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { WalletService } from "../services/wallet.service";

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, WalletService]
})
export class UserModule { }
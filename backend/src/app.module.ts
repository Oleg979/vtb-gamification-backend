import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./modules/user.module";
import { HttpModule } from "@nestjs/axios";
import { TransferModule } from "./modules/transfer.module";
import { TransferService } from "./services/transfer.service";
import { UserService } from "./services/user.service";
import { WalletService } from "./services/wallet.service";
import { UserEntity } from "./entities/user.entity";
import { NftModule } from "./modules/nft.module";

@Module({
  imports: [UserModule, TransferModule, NftModule, HttpModule, TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "lucky.db.elephantsql.com",
    "username": "tlguqhlo",
    "password": "wO3WNMehM99j9kgG-kiXptBpjxGITj48",
    "database": "tlguqhlo",
    "entities": [
      "src/entities/**/*.ts"
    ],
    "ssl": false,
    synchronize: true
  }), TypeOrmModule.forFeature([UserEntity])],
  controllers: [AppController],
  providers: [AppService, TransferService, UserService, WalletService]
})
export class AppModule {
}

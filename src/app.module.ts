import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./modules/user.module";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [UserModule, HttpModule, TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "lucky.db.elephantsql.com",
    "username": "tlguqhlo",
    "password": "wO3WNMehM99j9kgG-kiXptBpjxGITj48",
    "database": "tlguqhlo",
    "entities": [
      "src/entities/**/*.ts"
    ],
    "ssl": false,
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}

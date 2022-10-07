import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "lucky.db.elephantsql.com",
    username: "tlguqhlo",
    password: "wO3WNMehM99j9kgG-kiXptBpjxGITj48",
    database: "tlguqhlo",
    entities: ["**/*.entities{.ts,.js}"],
    ssl: false
  })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}

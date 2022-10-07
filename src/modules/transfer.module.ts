import { TransferController } from "../controllers/Transfer.controller";
import { TransferService } from "../services/Transfer.service";
import { Module } from "@nestjs/common";
import { WalletService } from "../services/wallet.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  providers: [TransferService, WalletService],
  controllers: [TransferController],
  exports: []
})
export class TransferModule {
}
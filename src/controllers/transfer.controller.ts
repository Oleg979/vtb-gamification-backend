import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { TransferService } from "../services/transfer.service";

@Controller("transfer")
export class TransferController {
  constructor(
    private userService: UserService,
    private transferService: TransferService
  ) {
  }

  @Get(":transactionHash")
  public async getTransationStatus(
    @Param("transactionHash") transactionHash: string
  ): Promise<{ status: string }> {
    return await this.transferService.getTransactionStatus(transactionHash);
  }

  @Post("ruble/from/:fromId/to/:toId")
  public async transferRuble(
    @Param("fromId") fromId: string,
    @Param("toId") toId: string,
    @Body() amount: number
  ): Promise<{ transactionHash: string }> {
    const [fromUser, toUser] = await Promise.all([this.userService.getUserById(fromId), this.userService.getUserById(toId)]);
    const fromPrivateKey = fromUser.walletPublicKey;
    const toPublicKey = toUser.walletPublicKey;
    return this.transferService.transferDigitalRubles(fromPrivateKey, toPublicKey, amount);
  }

  @Post("nft/from/:fromId/to/:toId")
  public async transferNft(
    @Param("fromId") fromId: string,
    @Param("toId") toId: string,
    @Body() tokenId: number
  ): Promise<{ transactionHash: string }> {
    const [fromUser, toUser] = await Promise.all([this.userService.getUserById(fromId), this.userService.getUserById(toId)]);
    const fromPrivateKey = fromUser.walletPublicKey;
    const toPublicKey = toUser.walletPublicKey;
    return this.transferService.transferNft(fromPrivateKey, toPublicKey, tokenId);
  }
}

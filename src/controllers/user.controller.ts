import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserEntity } from "../entities/user.entity";
import { UserService } from "../services/user.service";
import { WalletModel } from "../models/wallet.model";
import { WalletService } from "../services/wallet.service";

@Controller("user")
export class UserController {
  constructor(private userService: UserService, private walletService: WalletService) {
  }

  @Get(":userId")
  public async getUserById(@Param("userId") userId: string): Promise<UserEntity> {
    return await this.userService.getUserById(userId);
  }

  @Get(":userId/wallet")
  public async getWalletBalance(@Param("userId") userId: string): Promise<Pick<WalletModel, "nft" | "coinsAmount" | "maticAmount">> {
    const user = await this.userService.getUserById(userId);
    const walletPublicKey = user.walletPublicKey;
    const coinsBalance = await this.walletService.getWalletBalance(walletPublicKey);
    const nftBalance = await this.walletService.getWalletNftBalance(walletPublicKey);
    return {
      ...coinsBalance,
      ...nftBalance
    };
  }

  @Post()
  public async createUser(@Body() user: Partial<UserEntity>): Promise<UserEntity> {
    return this.userService.createUser(user);
  }
}

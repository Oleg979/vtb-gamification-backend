import { Injectable } from "@nestjs/common";
import { UserService } from "./user.service";
import { NftEntity } from "../entities/nft.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class NftService {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(NftEntity) private readonly repo: Repository<NftEntity>,
    @InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>
  ) {
  }

  private nftCostCalculationFunctionMap = {
    ["capybara.png"]: this.chillingCapybaraCostCalculationFunction
  };

  private async chillingCapybaraCostCalculationFunction(): Promise<number> {
    const users = await this.userService.getAllUsers();
    const usersWithNft = users
      .map((user) => user.nfts)
      .filter(
        (userNfts) =>
          userNfts.filter((nft) => nft === "capybara.png").length > 0
      ).length;
    return 100000 - 100 * usersWithNft;
  }

  async calculateNftCost(nftUri: string): Promise<number> {
    return this.nftCostCalculationFunctionMap[nftUri]();
  }

  async createNft(nft: Partial<NftEntity>): Promise<NftEntity> {
    return this.repo.save(nft);
  }

  async getNftById(nftUri: string): Promise<NftEntity> {
    return this.repo.findOneBy({ uri: nftUri });
  }

  async assignNftToUser(nftUri: string, userId: string): Promise<NftEntity> {
    const user = await this.userService.getUserById(userId);
    user.nfts.push(nftUri);
    await this.userRepo.save(user);
    const nft = await this.getNftById(nftUri);
    if (this.nftCostCalculationFunctionMap[nftUri]) {
      nft.cost = nft.cost - 100;
    }
    return await this.repo.save(nft);
  }

  async sellNft(nftUri: string, userId: string): Promise<NftEntity> {
    const user = await this.userService.getUserById(userId);
    user.nfts = user.nfts.filter(nft => nft !== nftUri);
    await this.userRepo.save(user);
    const nft = await this.getNftById(nftUri);
    if (this.nftCostCalculationFunctionMap[nftUri]) {
      nft.cost = nft.cost + 100;
    }
    return await this.repo.save(nft);
  }
}

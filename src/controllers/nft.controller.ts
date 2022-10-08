import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { NftService } from "../services/nft.service";
import { NftEntity } from "../entities/nft.entity";

@Controller("nft")
export class NftController {
  constructor(
    private nftService: NftService
  ) {
  }

  @Get(":nftUri")
  public async getNftByUri(
    @Param("nftUri") nftUri: string
  ): Promise<NftEntity> {
    return await this.nftService.getNftById(nftUri);
  }

  @Post()
  public async createNft(
    @Body() nft: Partial<NftEntity>
  ): Promise<NftEntity> {
    return this.nftService.createNft(nft);
  }

  @Get("assign/:nftUri/to/:userId")
  public async assignNftToUser(
    @Param("nftUri") nftUri: string,
    @Param("userId") userId: string
  ): Promise<NftEntity> {
    return await this.nftService.assignNftToUser(nftUri, userId);
  }

  @Get("sell/:nftUri/from/:userId")
  public async sellNft(
    @Param("nftUri") nftUri: string,
    @Param("userId") userId: string
  ): Promise<NftEntity> {
    return await this.nftService.sellNft(nftUri, userId);
  }

}
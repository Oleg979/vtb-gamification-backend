import { BLOCKCHAIN_API_BASE_URL } from "../config/config";
import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";


@Injectable()
export class TransferService {
  constructor(
    private readonly httpService: HttpService
  ) {
  }

  public async getTransactionStatus(transactionHash: string): Promise<{ status: string }> {
    return await this.httpService.axiosRef.get<{ status: string }>(`${BLOCKCHAIN_API_BASE_URL}/v1/transfers/status/${transactionHash}`).then(res => res.data);
  }

  public async transferDigitalRubles(fromPrivateKey: string, toPublicKey: string, amount: number): Promise<{ transactionHash: string }> {
    return await this.httpService.axiosRef.get(`${BLOCKCHAIN_API_BASE_URL}/v1/transfers/ruble`).then(res => res.data);
  }
  public async transferNft(fromPrivateKey: string, toPublicKey: string, tokenId: number): Promise<{ transactionHash: string }> {
    return await this.httpService.axiosRef.get(`${BLOCKCHAIN_API_BASE_URL}/v1/transfers/nft`).then(res => res.data);
  }

}
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { WalletModel } from '../models/wallet.model';
import { BLOCKCHAIN_API_BASE_URL } from '../config/config';
import { TransactionModel } from '../models/transaction.model';

export type WalletBalance = Pick<WalletModel, 'maticAmount' | 'coinsAmount'>;
export type WalletNftBalance = Pick<WalletModel, 'nft'>;

@Injectable()
export class WalletService {
  constructor(private readonly httpService: HttpService) {}

  public async getWalletBalance(publicKey: string): Promise<WalletBalance> {
    return await this.httpService.axiosRef
      .get<WalletBalance>(
        `${BLOCKCHAIN_API_BASE_URL}/v1/wallets/${publicKey}/balance`,
      )
      .then((res) => res.data);
  }

  public async getWalletNftBalance(
    publicKey: string,
  ): Promise<WalletNftBalance> {
    return await this.httpService.axiosRef
      .get<WalletNftBalance>(
        `${BLOCKCHAIN_API_BASE_URL}/v1/wallets/${publicKey}/nft/balance`,
      )
      .then((res) => res.data);
  }

  public async getWalletHistory(
    publicKey: string,
  ): Promise<Array<TransactionModel>> {
    return await this.httpService.axiosRef
      .post<Array<TransactionModel>>(
        `${BLOCKCHAIN_API_BASE_URL}/v1/wallets/${publicKey}/history`,
        {
          page: 1,
          offset: 0,
          sort: 'asc',
        },
      )
      .then((res) => res.data);
  }
}

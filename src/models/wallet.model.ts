export interface WalletModel {
  privateKey: string;
  publicKey: string;
  maticAmount: number;
  coinsAmount: number;
  nft: [
    {
      URI: string;
      tokens: number[];
    }
  ]
}
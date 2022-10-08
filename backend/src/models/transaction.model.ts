export interface TransactionModel {
  "blockNumber": number;
  "timeStamp": number;
  "contractAddress": string;
  "from": string;
  "to": string;
  "value": number;
  "tokenName": string;
  "tokenSymbol": string;
  "gasUsed": number;
  "confirmations": number;
}
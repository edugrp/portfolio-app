export enum AssetTypes {
  STOCK = 'Stock',
  CRYPTO = 'Crypto'
}

export class Asset {
  symbol: string;
  name: string;
  assetType: AssetTypes;

  constructor(symbol: string, name: string, asset: AssetTypes) {
    this.symbol = symbol;
    this.name = name;
    this.assetType = this.assetType;
  }

}


export class Quote {
  asset: Asset;
  latestTime: string;
  latestPrice: number;
  previousClose: number;
  open: number;
  close: number;
  high: number;
  low: number;

  constructor(asset: Asset) {
    this.asset = asset;
  }

  public changeInValue = (): number => {
    if(this.latestPrice !== 0 && this.previousClose !== 0) {
      return this.latestPrice - this.previousClose;
    }
    return 0;
  }

  public changeInPercentage = (): number => {
    if(this.latestPrice !== 0 && this.previousClose !== 0) {
      return this.latestPrice / this.previousClose - 1;
    }
    return 0;
  }
}


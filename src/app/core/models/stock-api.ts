export interface StockApi {
  Name: string;
  Sector: string;
  Symbol: string;
}

export interface StockTickerApi {
  quote: QuoteApi;
  bids: any[];
  asks: any[];
  trades: TradeApi[];
  systemEvent: SystemEventApi;
}

export interface QuoteApi {
  symbol: string;
  companyName: string;
  primaryExchange: string;
  sector: string;
  calculationPrice: string;
  open: number;
  openTime: number;
  close: number;
  closeTime: number;
  high: number;
  low: number;
  latestPrice: number;
  latestSource: string;
  latestTime: string;
  latestUpdate: number;
  latestVolume: number;
  iexRealtimePrice: number;
  iexRealtimeSize: number;
  iexLastUpdated: number;
  delayedPrice: number;
  delayedPriceTime: number;
  extendedPrice: number;
  extendedChange: number;
  extendedChangePercent: number;
  extendedPriceTime: number;
  previousClose: number;
  change: number;
  changePercent: number;
  iexMarketPercent: number;
  iexVolume: number;
  avgTotalVolume: number;
  iexBidPrice: number;
  iexBidSize: number;
  iexAskPrice: number;
  iexAskSize: number;
  marketCap: number;
  peRatio: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
}

export interface SystemEventApi {
  systemEvent: string;
  timestamp: number;
}

export interface TradeApi {
  price: number;
  size: number;
  tradeId: number;
  isISO: boolean;
  isOddLot: boolean;
  isOutsideRegularHours: boolean;
  isSinglePriceCross: boolean;
  isTradeThroughExempt: boolean;
  timestamp: number;
}

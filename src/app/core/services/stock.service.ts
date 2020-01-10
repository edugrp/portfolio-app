import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { StockApi, StockTickerApi } from "@core/models/stock-api";
import { RapidApiService } from "./rapid-api.service.js";
import { Asset, AssetTypes, Quote } from "@core/models/asset.js";

@Injectable({
  providedIn: "root"
})
export class StockService {
  constructor(private rapidApiService: RapidApiService) {}

  public getAll = (): Observable<Asset[]> => {
    return this.rapidApiService.getStockAll().pipe(
      map((list: StockApi[]) => {
        const assetList: Asset[] = [];
        for (const item of list) {
          assetList.push(new Asset(item.Symbol, item.Name, AssetTypes.STOCK));
        }
        return assetList;
      })
    );
  };

  public getTicker = (symbol: string): Observable<Quote> => {
    return this.rapidApiService.getStockTicker(symbol).pipe(
      map((stockTickerApi: StockTickerApi) => {
        const quote: Quote = new Quote(
          new Asset(
            stockTickerApi.quote.symbol,
            stockTickerApi.quote.companyName,
            AssetTypes.STOCK
          )
        );
        quote.open = stockTickerApi.quote.open;
        quote.close = stockTickerApi.quote.close;
        quote.high = stockTickerApi.quote.high;
        quote.low = stockTickerApi.quote.low;
        quote.previousClose = stockTickerApi.quote.close;
        quote.latestPrice = stockTickerApi.quote.latestPrice;
        quote.latestTime = stockTickerApi.quote.latestTime;
        return quote;
      })
    );
  };
}

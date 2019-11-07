import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CryptoApi, CryptoTickerApi } from '@core/models/crypto-api';
import { RapidApiService } from './rapid-api.service.js';
import { Asset, AssetTypes, Quote } from '@core/models/asset.js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private rapidApiService: RapidApiService) {}

  public getAll = (): Observable<Asset[]> => {
    return this.rapidApiService.getCryptoAll().pipe(
      map((list: CryptoApi[]) => {
        const assetList: Asset[] = [];
        for (const item of list) {
          assetList.push(new Asset(item.Symbol, item.Name, AssetTypes.CRYPTO));
        }
        return assetList;
      })
    );
  }

  public getTicker = (symbol: string): Observable<Quote> => {
    return this.rapidApiService.getCryptoTicker(symbol).pipe(
      map((cryptoTickerApi: CryptoTickerApi) => {
        const quote: Quote = new Quote(new Asset(cryptoTickerApi.coin_id, cryptoTickerApi.coin_name, AssetTypes.CRYPTO));
        quote.open = 0;
        quote.close = 0;
        quote.high = 0;
        quote.low = 0;
        quote.latestPrice = +cryptoTickerApi.last_price;
        quote.previousClose = quote.latestPrice - (quote.latestPrice * (+cryptoTickerApi.price_24hr_pcnt / 100));
        quote.latestTime = cryptoTickerApi.utc_date;
        return quote;
      })
    );
  }
}

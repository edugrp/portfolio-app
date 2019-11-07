import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { CryptoApi, CryptoTickerApi } from '@core/models/crypto-api';
import { StockApi, StockTickerApi } from '@core/models/stock-api';
import stockList from './sp500_companies.json';

@Injectable({
  providedIn: 'root'
})
export class RapidApiService {

  constructor(private http: HttpClient) { }

  public getCryptoAll = (): Observable<CryptoApi[]> => {
    const url = 'https://bravenewcoin-v1.p.rapidapi.com/digital-currency-symbols';
    const headers = new  HttpHeaders().set('x-rapidapi-host', 'bravenewcoin-v1.p.rapidapi.com')
                                      .set('x-rapidapi-key', '329ec522d2mshb54fc83b8df4ad3p124762jsnc7119e95b2fa');

    return this.http.get(url, { headers })
    .pipe(map(response => {
      const cryptoList: CryptoApi[] = [];
      // tslint:disable-next-line: no-string-literal
      const list = response['digital_currencies'];
      // tslint:disable-next-line: forin
      for (const key in Object.keys(list)) {
        const crypto = list[key];
        // tslint:disable-next-line: forin
        for (const prop in crypto) {
          const cryptoTmp: CryptoApi = new CryptoApi();
          cryptoTmp.Name = crypto[prop];
          cryptoTmp.Symbol = prop;
          cryptoList.push(cryptoTmp);
        }
      }
      return cryptoList;
    }));
  }

  public getCryptoTicker = (symbol: string): Observable<CryptoTickerApi> => {
    const url = 'https://bravenewcoin-v1.p.rapidapi.com/ticker?coin=' + symbol;
    const headers = new  HttpHeaders().set('x-rapidapi-host', 'bravenewcoin-v1.p.rapidapi.com')
                                      .set('x-rapidapi-key', '329ec522d2mshb54fc83b8df4ad3p124762jsnc7119e95b2fa');

    return this.http.get<CryptoTickerApi>(url, { headers });
  }

  public getStockAll = (): Observable<StockApi[]> => {
    return of(stockList);
  }

  public getStockTicker = (symbol: string): Observable<StockTickerApi> => {
    const url = 'https://investors-exchange-iex-trading.p.rapidapi.com/stock/' + symbol + '/book';
    const headers = new  HttpHeaders().set('x-rapidapi-host', 'investors-exchange-iex-trading.p.rapidapi.com')
                                      .set('x-rapidapi-key', '329ec522d2mshb54fc83b8df4ad3p124762jsnc7119e95b2fa');

    return this.http.get<StockTickerApi>(url, { headers });
  }
}

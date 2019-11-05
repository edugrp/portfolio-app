import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Stock, StockTicker } from '@core/models/stock';

import stockList from './sp500_companies.json';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  public getAll = (): Observable<Stock[]> => {
    return of(stockList);
  }

  public getTicker = (symbol: string): Observable<StockTicker> => {
    const url = 'https://investors-exchange-iex-trading.p.rapidapi.com/stock/' + symbol + '/book';
    const headers = new  HttpHeaders().set('x-rapidapi-host', 'investors-exchange-iex-trading.p.rapidapi.com')
                                      .set('x-rapidapi-key', '329ec522d2mshb54fc83b8df4ad3p124762jsnc7119e95b2fa');

    return this.http.get<StockTicker>(url, { headers });
  }

}

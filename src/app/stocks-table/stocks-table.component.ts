import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../models/stock';
import { StocksService } from '../services/stocks.service';

@Component({
  selector: 'app-stocks-table',
  templateUrl: './stocks-table.component.html',
  styleUrls: ['./stocks-table.component.css']
})
export class StocksTableComponent implements OnInit {

  displayedColumns: string[] = ['symbol', 'companyName', 'latestPrice', 'latestTime'];
  watchList = ['GOOG', 'FB', 'AAPL', 'MSFT'];

  quotes: Quote[] = [];
  addStockSymbol = '';

  constructor(
    private stocksService: StocksService
  ) { }

  ngOnInit() {
    this.updateQuotes();
  }

  public updateQuotes = () => {
    this.quotes = [];
    for (const symbol of this.watchList) {
      this.stocksService.getTicker(symbol).subscribe(ticker => {
        console.log(symbol + ' ticker', ticker);
        this.quotes = this.quotes.concat(ticker.quote);
      });
    }
  }

  public addStock = () => {
    if (this.addStockSymbol.length > 0) {
      this.watchList.push(this.addStockSymbol);
      this.updateQuotes();
      this.addStockSymbol = '';
    }
  }

}

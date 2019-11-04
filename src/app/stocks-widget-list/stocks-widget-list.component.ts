import { Component, OnInit } from '@angular/core';
import { Quote } from './../models/stock';
import { StocksService } from '../services/stocks.service';

@Component({
  selector: 'app-stocks-widget-list',
  templateUrl: './stocks-widget-list.component.html',
  styleUrls: ['./stocks-widget-list.component.css']
})
export class StocksWidgetListComponent implements OnInit {

  watchList = ['GOOGL', 'AMD', 'FB', 'AAPL', 'F', 'MCD', 'BKNG'];
  quotes: Quote[] = [];

  constructor(
    private stocksService: StocksService
  ) {
    // this.stocksService.getAll().subscribe(list => console.log('Stock List', list));
    for (const symbol of this.watchList) {
      this.stocksService.getTicker(symbol).subscribe(ticker => {
        console.log(symbol + ' ticker', ticker);
        this.quotes.push(ticker.quote);
      });
    }
  }

  ngOnInit() {
  }

}

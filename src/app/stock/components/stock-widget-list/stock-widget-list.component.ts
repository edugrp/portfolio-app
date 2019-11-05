import { Component, OnInit } from '@angular/core';
import { QuoteApi } from '@core/models/stock-api';
import { StockService } from '@core/services/stock.service';

@Component({
  selector: 'app-stock-widget-list',
  templateUrl: './stock-widget-list.component.html',
  styleUrls: ['./stock-widget-list.component.css']
})
export class StockWidgetListComponent implements OnInit {

  watchList = ['GOOGL', 'AMD', 'FB', 'AAPL', 'F', 'MCD', 'BKNG'];
  quotes: QuoteApi[] = [];

  constructor(
    private stockService: StockService
  ) {
    // this.stocksService.getAll().subscribe(list => console.log('Stock List', list));
    for (const symbol of this.watchList) {
      this.stockService.getTicker(symbol).subscribe(ticker => {
        console.log(symbol + ' ticker', ticker);
        this.quotes.push(ticker.quote);
      });
    }
  }

  ngOnInit() {
  }

}

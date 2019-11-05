import { Component, OnInit } from '@angular/core';
import { Quote } from '@core/models/stock';
import { StockService } from '@core/services/stock.service';

@Component({
  selector: 'app-stock-widget-list',
  templateUrl: './stock-widget-list.component.html',
  styleUrls: ['./stock-widget-list.component.css']
})
export class StockWidgetListComponent implements OnInit {

  watchList = ['GOOGL', 'AMD', 'FB', 'AAPL', 'F', 'MCD', 'BKNG'];
  quotes: Quote[] = [];

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

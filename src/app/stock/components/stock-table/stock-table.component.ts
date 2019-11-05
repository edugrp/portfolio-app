import { Component, OnInit } from '@angular/core';
import { Quote, Stock } from '@core/models/stock';
import { StockService } from '@core/services/stock.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.css']
})
export class StockTableComponent implements OnInit {

  displayedColumns: string[] = ['symbol', 'companyName', 'latestPrice', 'latestTime'];
  watchList = ['GOOG', 'FB', 'AAPL', 'MSFT'];

  quotes: Quote[] = [];
  addStockSymbol = '';
  stockList: Stock[] = [];

  constructor(
    private stockService: StockService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.stockService.getAll().subscribe(list => {
      this.stockList = list;
    });
    this.updateQuotes();
  }

  public updateQuotes = () => {
    this.quotes = [];
    for (const symbol of this.watchList) {
      this.stockService.getTicker(symbol).subscribe(ticker => {
        // console.log(symbol + ' ticker', ticker);
        this.quotes = this.quotes.concat(ticker.quote);
      });
    }
  }

  public addStock = () => {
    if (this.addStockSymbol.length > 0) {
      this.watchList.push(this.addStockSymbol);
      this.openSnackBar(this.addStockSymbol + ' added!', 'X');
      this.updateQuotes();
      this.addStockSymbol = '';
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}

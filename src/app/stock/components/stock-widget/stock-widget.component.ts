import { Component, OnInit, Input } from '@angular/core';

import { QuoteApi } from '@core/models/stock-api';

@Component({
  selector: 'app-stock-widget',
  templateUrl: './stock-widget.component.html',
  styleUrls: ['./stock-widget.component.css']
})
export class StockWidgetComponent implements OnInit {

  @Input() quote: QuoteApi;

  constructor() { }

  ngOnInit() {
  }

  public changeInValue = (quote: QuoteApi): number => {
    return quote.latestPrice - quote.close;
  }

  public changeInPercentage = (quote: QuoteApi): number => {
    return quote.latestPrice / quote.close - 1;
  }

}

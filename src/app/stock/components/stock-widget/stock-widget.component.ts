import { Component, OnInit, Input } from '@angular/core';

import { Quote } from '@core/models/stock';

@Component({
  selector: 'app-stock-widget',
  templateUrl: './stock-widget.component.html',
  styleUrls: ['./stock-widget.component.css']
})
export class StockWidgetComponent implements OnInit {

  @Input() quote: Quote;

  constructor() { }

  ngOnInit() {
  }

  public changeInValue = (quote: Quote): number => {
    return quote.latestPrice - quote.close;
  }

  public changeInPercentage = (quote: Quote): number => {
    return quote.latestPrice / quote.close - 1;
  }

}

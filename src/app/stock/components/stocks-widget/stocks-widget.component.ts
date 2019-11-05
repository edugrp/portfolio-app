import { Component, OnInit, Input } from '@angular/core';

import { Quote } from '@core/models/stock';

@Component({
  selector: 'app-stocks-widget',
  templateUrl: './stocks-widget.component.html',
  styleUrls: ['./stocks-widget.component.css']
})
export class StocksWidgetComponent implements OnInit {

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

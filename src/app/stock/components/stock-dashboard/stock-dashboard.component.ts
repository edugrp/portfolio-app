import { Component, OnInit } from '@angular/core';
import { AssetTypes } from '@core/models/asset';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent implements OnInit {

  tableList = ['GOOGL', 'AAPL', 'MSFT', 'FB'];
  cardList = ['GOOGL', 'AMD', 'AAPL', 'F', 'MCD', 'BKNG', 'FB'];
  assetType = AssetTypes.STOCK;

  constructor() { }

  ngOnInit() {
  }

}

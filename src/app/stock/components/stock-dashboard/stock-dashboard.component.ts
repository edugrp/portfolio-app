import { Component, OnInit } from '@angular/core';
import { AssetTypes } from '@core/models/asset';
import { Store, select } from '@ngrx/store';
import { resetAssets, setAssets } from '../../store/stock.actions';
import * as fromStock from '../../store/stock.reducer';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent implements OnInit {

  tableList = [];
  cardList = [];
  assetType = AssetTypes.STOCK;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store
      .select<any>(fromStock.stockFeatureKey)
      .subscribe(stockState => {
        console.log(stockState.assets);
        this.tableList = stockState.assets.tableList;
        this.cardList = stockState.assets.cardList;
      });
  }
  public onNewAsset = (newAsset, assetType) => {
    if (newAsset.length > 0) {
      console.log(newAsset);
      this.store.dispatch(setAssets( {newAssets: { tableList: [...this.tableList, newAsset], cardList: [...this.cardList]}}));
    }
  }

}

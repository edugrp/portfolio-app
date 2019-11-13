import { Component, OnInit } from '@angular/core';
import { AssetTypes, Asset } from '@core/models/asset';
import { Store } from '@ngrx/store';
import {
  resetAssets,
  setAssets,
  addToTableList,
  addToCardList
} from '../../store/stock.actions';
import * as fromStock from '../../store/stock.reducer';
import * as stockSelectors from '../../store/stock.selectors';
import * as fromCore from '@core/store/core.reducer';
import * as coreSelectors from '@core/store/core.selectors';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styleUrls: ['./stock-dashboard.component.css']
})
export class StockDashboardComponent implements OnInit {
  tableList = [];
  cardList = [];
  assetType = AssetTypes.STOCK;
  allStocks: Asset[] = [];

  constructor(
    private store: Store<fromStock.State>,
    private coreStore: Store<fromCore.State>
  ) {}

  ngOnInit() {
    this.store.select(stockSelectors.selectTableList).subscribe(list => {
      this.tableList = list;
    });
    this.store.select(stockSelectors.selectCardList).subscribe(list => {
      this.cardList = list;
    });
    this.coreStore.select(coreSelectors.selectStockList).subscribe(list => {
      this.allStocks = list;
    });
  }

  public onNewAsset = (newAsset, addTo) => {
    if (newAsset.length > 0) {
      console.log(newAsset);
      if (addTo === 'tableList') {
        this.store.dispatch(addToTableList({ newItem: newAsset }));
      } else if (addTo === 'cardList') {
        this.store.dispatch(addToCardList({ newItem: newAsset }));
      }
    }
  };
}

import { Component, OnInit } from '@angular/core';
import { AssetTypes } from '@core/models/asset';
import { Store } from '@ngrx/store';
import { resetAssets, setAssets } from '../../store/my-wallet.actions';
import * as fromMyWallet from '../../store/my-wallet.reducer';
import * as myWalletSelectors from '../../store/my-wallet.selectors';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-my-wallet-dashboard',
  templateUrl: './my-wallet-dashboard.component.html',
  styleUrls: ['./my-wallet-dashboard.component.css']
})
export class MyWalletDashboardComponent implements OnInit {
  stockList = [];
  cryptoList = [];
  stockType = AssetTypes.STOCK;
  cryptoType = AssetTypes.CRYPTO;

  constructor(private store: Store<fromMyWallet.State>) {}

  ngOnInit() {
    this.store.select(myWalletSelectors.selectStockList).subscribe(list => {
      this.stockList = list;
    });
    this.store.select(myWalletSelectors.selectCryptoList).subscribe(list => {
      this.cryptoList = list;
    });
  }
  public onNewAsset = (newAsset, assetType) => {
    if (newAsset.length > 0) {
      console.log(newAsset);
      this.store.dispatch(setAssets( {newAssets: { stockList: [...this.stockList, newAsset], cryptoList: [...this.cryptoList]}}));
    }
  }
}
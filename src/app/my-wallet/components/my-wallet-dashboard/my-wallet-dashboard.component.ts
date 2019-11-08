import { Component, OnInit } from '@angular/core';
import { AssetTypes } from '@core/models/asset';
import { Store, select } from '@ngrx/store';
import { resetAssets, setAssets } from '../../store/my-wallet.actions';
import * as fromMyWallet from '../../store/my-wallet.reducer';

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

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store
      .select<any>(fromMyWallet.myWalletFeatureKey)
      .subscribe(myWalletState => {
        console.log(myWalletState.assets);
        this.stockList = myWalletState.assets.stockList;
        this.cryptoList = myWalletState.assets.cryptoList;
      });
  }
  public onNewAsset = (newAsset, assetType) => {
    if (newAsset.length > 0) {
      console.log(newAsset);
      this.store.dispatch(setAssets( {newAssets: { stockList: [...this.stockList, newAsset], cryptoList: [...this.cryptoList]}}));
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { AssetTypes, Asset, Quote } from '@core/models/asset';

import { Store } from '@ngrx/store';
import * as fromMyWallet from '../../store/my-wallet.reducer';
import * as myWalletSelectors from '../../store/my-wallet.selectors';
import { addStockStarted, addCryptoStarted } from './../../store/my-wallet.actions';
import * as fromCore from '@core/store/core.reducer';
import * as coreSelectors from '@core/store/core.selectors';

@Component({
  selector: 'app-my-wallet-dashboard',
  templateUrl: './my-wallet-dashboard.component.html',
  styleUrls: ['./my-wallet-dashboard.component.css']
})
export class MyWalletDashboardComponent implements OnInit {
  stockList: Quote[] = [];
  cryptoList: Quote[] = [];
  stockType = AssetTypes.STOCK;
  cryptoType = AssetTypes.CRYPTO;
  allStocks: Asset[] = [];
  allCryptos: Asset[] = [];

  constructor(
    private store: Store<fromMyWallet.State>,
    private coreStore: Store<fromCore.State>
  ) {}

  ngOnInit() {
    this.store.select(myWalletSelectors.selectStockList).subscribe(list => {
      this.stockList = list;
    });
    this.store.select(myWalletSelectors.selectCryptoList).subscribe(list => {
      this.cryptoList = list;
    });
    this.coreStore.select(coreSelectors.selectStockList).subscribe(list => {
      this.allStocks = list;
    });
    this.coreStore.select(coreSelectors.selectCryptoList).subscribe(list => {
      this.allCryptos = list;
    });
  }

  public onNewAsset = (symbol, assetType) => {
    if (symbol.length > 0) {
      console.log(symbol);
      if (assetType === AssetTypes.STOCK) {
        this.store.dispatch(addStockStarted({ symbol }));
      } else if (assetType === AssetTypes.CRYPTO) {
        this.store.dispatch(addCryptoStarted({ symbol }));
      }
    }
  }
}

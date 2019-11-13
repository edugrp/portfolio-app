import { Component, OnInit } from '@angular/core';
import { AssetTypes, Asset } from '@core/models/asset';
import { Store } from '@ngrx/store';
import {
  resetAssets,
  setAssets,
  addStock,
  addCrypto
} from '../../store/my-wallet.actions';
import * as fromMyWallet from '../../store/my-wallet.reducer';
import * as myWalletSelectors from '../../store/my-wallet.selectors';
import * as fromCore from '@core/store/core.reducer';
import * as coreSelectors from '@core/store/core.selectors';

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

  public onNewAsset = (newAsset, assetType) => {
    if (newAsset.length > 0) {
      console.log(newAsset);
      if (assetType === AssetTypes.STOCK) {
        this.store.dispatch(addStock({ newStock: newAsset }));
      } else if (assetType === AssetTypes.CRYPTO) {
        this.store.dispatch(addCrypto({ newCrypto: newAsset }));
      }
    }
  };
}

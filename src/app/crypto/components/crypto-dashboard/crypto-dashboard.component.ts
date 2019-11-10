import { Component, OnInit } from '@angular/core';
import { AssetTypes } from '@core/models/asset';
import { Store, select } from '@ngrx/store';
import { resetAssets, setAssets } from '../../store/crypto.actions';
import * as fromCrypto from '../../store/crypto.reducer';

@Component({
  selector: 'app-crypto-dashboard',
  templateUrl: './crypto-dashboard.component.html',
  styleUrls: ['./crypto-dashboard.component.css']
})
export class CryptoDashboardComponent implements OnInit {

  tableList = [];
  cardList = [];
  assetType = AssetTypes.CRYPTO;

  constructor(
    private store: Store<any>
  ) {
  }

  ngOnInit() {
    this.store
      .select<any>(fromCrypto.cryptoFeatureKey)
      .subscribe(cryptoState => {
        console.log(cryptoState.assets);
        this.tableList = cryptoState.assets.tableList;
        this.cardList = cryptoState.assets.cardList;
      });
  }
  public onNewAsset = (newAsset, assetType) => {
    if (newAsset.length > 0) {
      console.log(newAsset);
      this.store.dispatch(setAssets( {newAssets: { tableList: [...this.tableList, newAsset], cardList: [...this.cardList]}}));
    }
  }
}

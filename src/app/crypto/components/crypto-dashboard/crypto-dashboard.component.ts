import { Component, OnInit } from '@angular/core';
import { AssetTypes } from '@core/models/asset';
import { Store } from '@ngrx/store';
import { resetAssets, setAssets } from '../../store/crypto.actions';
import * as fromCrypto from '../../store/crypto.reducer';
import * as cryptoSelectors from '../../store/crypto.selectors';

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
    private store: Store<fromCrypto.State>
  ) {
  }

  ngOnInit() {
    this.store.select(cryptoSelectors.selectTableList).subscribe(list => {
      this.tableList = list;
    });
    this.store.select(cryptoSelectors.selectCardList).subscribe(list => {
      this.cardList = list;
    });
  }
  public onNewAsset = (newAsset, assetType) => {
    if (newAsset.length > 0) {
      console.log(newAsset);
      this.store.dispatch(setAssets( {newAssets: { tableList: [...this.tableList, newAsset], cardList: [...this.cardList]}}));
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { AssetTypes, Asset } from '@core/models/asset';
import { Store } from '@ngrx/store';
import { resetAssets, setAssets, addToTableList, addToCardList } from '../../store/crypto.actions';
import * as fromCrypto from '../../store/crypto.reducer';
import * as cryptoSelectors from '../../store/crypto.selectors';

import * as fromCore from '@core/store/core.reducer';
import * as coreSelectors from '@core/store/core.selectors';

@Component({
  selector: 'app-crypto-dashboard',
  templateUrl: './crypto-dashboard.component.html',
  styleUrls: ['./crypto-dashboard.component.css']
})
export class CryptoDashboardComponent implements OnInit {

  tableList = [];
  cardList = [];
  assetType = AssetTypes.CRYPTO;
  allCryptos: Asset[] = [];

  constructor(
    private store: Store<fromCrypto.State>,
    private coreStore: Store<fromCore.State>
  ) {
  }

  ngOnInit() {
    this.store.select(cryptoSelectors.selectTableList).subscribe(list => {
      this.tableList = list;
    });
    this.store.select(cryptoSelectors.selectCardList).subscribe(list => {
      this.cardList = list;
    });
    this.coreStore.select(coreSelectors.selectCryptoList).subscribe(list => {
      this.allCryptos = list;
    });
  }
  public onNewAsset = (newAsset, addTo) => {
    if (newAsset.length > 0) {
      console.log(newAsset);
      if (addTo === 'tableList') {
        this.store.dispatch(addToTableList({newItem: newAsset}));
      } else if (addTo === 'cardList') {
        this.store.dispatch(addToCardList({newItem: newAsset}));
      }
    }
  }

}

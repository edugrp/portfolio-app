import { Component, OnInit } from "@angular/core";
import { AssetTypes } from "@core/models/asset";
import { Store } from "@ngrx/store";
import {
  resetAssets,
  setAssets,
  addStock,
  addCrypto
} from "../../store/my-wallet.actions";
import * as fromMyWallet from "../../store/my-wallet.reducer";
import * as myWalletSelectors from "../../store/my-wallet.selectors";

@Component({
  selector: "app-my-wallet-dashboard",
  templateUrl: "./my-wallet-dashboard.component.html",
  styleUrls: ["./my-wallet-dashboard.component.css"]
})
export class MyWalletDashboardComponent implements OnInit {
  stockList = [];
  cryptoList = [];
  stockType = AssetTypes.STOCK;
  cryptoType = AssetTypes.CRYPTO;

  constructor(private store: Store<fromMyWallet.State>) {}

  ngOnInit() {
    this.store.select(myWalletSelectors.selectStockList).subscribe(list => {
      // console.log(list);
      this.stockList = list;
    });
    this.store.select(myWalletSelectors.selectCryptoList).subscribe(list => {
      // console.log(list);
      this.cryptoList = list;
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

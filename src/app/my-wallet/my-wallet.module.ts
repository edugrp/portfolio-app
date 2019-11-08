import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import * as fromComponents from './components';

import { MyWalletRoutingModule } from './my-wallet-routing.module';

import { StoreModule } from '@ngrx/store';
import * as fromMyWallet from './store/my-wallet.reducer';

@NgModule({
  declarations: [fromComponents.components],
  imports: [
    CommonModule,
    SharedModule,
    MyWalletRoutingModule,
    StoreModule.forFeature(fromMyWallet.myWalletFeatureKey, {assets: fromMyWallet.reducer })
  ]
})
export class MyWalletModule { }

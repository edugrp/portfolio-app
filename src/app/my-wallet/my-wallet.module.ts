import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import * as fromComponents from './components';

import { MyWalletRoutingModule } from './my-wallet-routing.module';

@NgModule({
  declarations: [fromComponents.components],
  imports: [
    CommonModule,
    SharedModule,
    MyWalletRoutingModule
  ]
})
export class MyWalletModule { }

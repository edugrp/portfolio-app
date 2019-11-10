import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import * as fromComponents from './components';

import { StockRoutingModule } from './stock-routing.module';

import { StoreModule } from '@ngrx/store';
import * as fromStock from './store/stock.reducer';

@NgModule({
  declarations: [fromComponents.components],
  imports: [
    CommonModule,
    SharedModule,
    StockRoutingModule,
    StoreModule.forFeature(fromStock.stockFeatureKey, fromStock.reducer)
  ]
})
export class StockModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import * as fromComponents from './components';

import { CryptoRoutingModule } from './crypto-routing.module';

import { StoreModule } from '@ngrx/store';
import * as fromCrypto from './store/crypto.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CryptoEffects } from './store/crypto.effects';

@NgModule({
  declarations: [fromComponents.components],
  imports: [
    CommonModule,
    SharedModule,
    CryptoRoutingModule,
    StoreModule.forFeature(fromCrypto.cryptoFeatureKey, fromCrypto.reducer),
    EffectsModule.forFeature([CryptoEffects])
  ]
})
export class CryptoModule { }

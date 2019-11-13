import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import * as fromCore from './store/core.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './store/core.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromCore.coreFeatureKey, fromCore.reducer),
    EffectsModule.forFeature([CoreEffects])
  ]
})
export class CoreModule { }

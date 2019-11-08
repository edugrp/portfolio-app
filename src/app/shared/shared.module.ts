import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import * as fromComponents from './components';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { WatchTableComponent } from './components/watch-table/watch-table.component';
import { ButtonAddAssetComponent } from './components/button-add-asset/button-add-asset.component';

@NgModule({
  declarations: [...fromComponents.components, CardDetailComponent, CardListComponent, WatchTableComponent, ButtonAddAssetComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }

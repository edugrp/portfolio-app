import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockDashboardComponent } from './components';
import { MainLayoutComponent } from '@shared/components';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: '', component: StockDashboardComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }

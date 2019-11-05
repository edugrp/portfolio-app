import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyWalletComponent } from './components';
import { MainLayoutComponent } from '@shared/components';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: '', component: MyWalletComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyWalletRoutingModule {}

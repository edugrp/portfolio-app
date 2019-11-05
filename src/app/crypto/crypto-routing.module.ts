import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoDashboardComponent } from './components';
import { MainLayoutComponent } from '@shared/components';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [{ path: '', component: CryptoDashboardComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoRoutingModule {}

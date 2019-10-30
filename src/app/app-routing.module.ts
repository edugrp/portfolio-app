import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { StocksComponent } from './stocks/stocks.component';
import { CryptosComponent } from './cryptos/cryptos.component';

const routes: Routes = [
  { path: 'my-wallet', component: MyWalletComponent},
  { path: 'stocks', component: StocksComponent},
  { path: 'cryptos', component: CryptosComponent},
  { path: '', redirectTo: '/my-wallet', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

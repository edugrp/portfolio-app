import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'my-wallet', loadChildren: './my-wallet/my-wallet.module#MyWalletModule'},
  { path: 'stocks', loadChildren: './stock/stock.module#StockModule'},
  { path: 'cryptos', loadChildren: './crypto/crypto.module#CryptoModule'},
  { path: '', redirectTo: 'my-wallet', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

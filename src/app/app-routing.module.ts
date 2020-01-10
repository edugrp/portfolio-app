import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './auth/auth.module#AuthModule' },
  {
    path: 'my-wallet',
    loadChildren: './my-wallet/my-wallet.module#MyWalletModule'
  },
  { path: 'stocks', loadChildren: './stock/stock.module#StockModule' },
  { path: 'cryptos', loadChildren: './crypto/crypto.module#CryptoModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

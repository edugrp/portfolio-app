import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { StocksComponent } from './stocks/stocks.component';
import { CryptosComponent } from './cryptos/cryptos.component';
import { StocksWidgetComponent } from './stocks-widget/stocks-widget.component';
import { StocksTableComponent } from './stocks-table/stocks-table.component';
import { StocksWidgetListComponent } from './stocks-widget-list/stocks-widget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyWalletComponent,
    StocksComponent,
    CryptosComponent,
    StocksWidgetComponent,
    StocksTableComponent,
    StocksWidgetListComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

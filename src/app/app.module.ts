import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material-module';

import { HeaderComponent } from './header/header.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { StocksComponent } from './stocks/stocks.component';
import { CryptosComponent } from './cryptos/cryptos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyWalletComponent,
    StocksComponent,
    CryptosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

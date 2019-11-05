import { Component, OnInit } from '@angular/core';
import { CryptoService } from '@core/services/crypto.service';

@Component({
  selector: 'app-crypto-dashboard',
  templateUrl: './crypto-dashboard.component.html',
  styleUrls: ['./crypto-dashboard.component.css']
})
export class CryptoDashboardComponent implements OnInit {

  constructor(
    private cryptoService: CryptoService
  ) {
    this.cryptoService.getAll().subscribe(list => console.log('Crypto List', list));
    this.cryptoService.getTicker('btc').subscribe(ticker => console.log('BTC ticker', ticker));
  }

  ngOnInit() {
  }

}

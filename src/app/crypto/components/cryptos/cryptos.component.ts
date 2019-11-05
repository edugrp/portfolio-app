import { Component, OnInit } from '@angular/core';
import { CryptosService } from '@core/services/cryptos.service';

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css']
})
export class CryptosComponent implements OnInit {

  constructor(
    private cryptosService: CryptosService
  ) {
    this.cryptosService.getAll().subscribe(list => console.log('Crypto List', list));
    this.cryptosService.getTicker('btc').subscribe(ticker => console.log('BTC ticker', ticker));
  }

  ngOnInit() {
  }

}

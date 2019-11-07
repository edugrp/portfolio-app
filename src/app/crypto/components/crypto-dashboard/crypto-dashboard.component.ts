import { Component, OnInit } from '@angular/core';
import { AssetTypes } from '@core/models/asset';

@Component({
  selector: 'app-crypto-dashboard',
  templateUrl: './crypto-dashboard.component.html',
  styleUrls: ['./crypto-dashboard.component.css']
})
export class CryptoDashboardComponent implements OnInit {

  tableList = ['BTC', 'LTC'];
  cardList = ['BTC', 'LTC', 'DOGE', 'ETH', 'XRP'];
  assetType = AssetTypes.CRYPTO;

  constructor(
  ) {
  }

  ngOnInit() {
  }

}

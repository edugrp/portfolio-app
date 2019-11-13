import { Component, OnInit, Input } from '@angular/core';
import { Quote, AssetTypes } from '@core/models/asset';
import { StockService } from '@core/services/stock.service';
import { CryptoService } from '@core/services/crypto.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() quotes: Quote[];
  @Input() assetType: AssetTypes;

  constructor(private stockService: StockService, private cryptoService: CryptoService) {}

  ngOnInit() {
  }
}

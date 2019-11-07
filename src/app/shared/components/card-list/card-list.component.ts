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
  @Input() watchList;
  @Input() assetType: AssetTypes;

  quotes: Quote[] = [];

  constructor(private stockService: StockService, private cryptoService: CryptoService) {}

  ngOnInit() {
    if (this.watchList != null && this.assetType != null) {
      for (const symbol of this.watchList) {
        if(this.assetType === AssetTypes.STOCK) {
          this.stockService.getTicker(symbol).subscribe(ticker => {
            this.quotes.push(ticker);
          });
        } else if (this.assetType === AssetTypes.CRYPTO) {
          this.cryptoService.getTicker(symbol).subscribe(ticker => {
            this.quotes.push(ticker);
          });
        }
      }
    }
  }
}

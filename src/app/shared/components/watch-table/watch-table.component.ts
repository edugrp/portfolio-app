import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Asset, Quote, AssetTypes } from '@core/models/asset';
import { StockService } from '@core/services/stock.service';
import { CryptoService } from '@core/services/crypto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-watch-table',
  templateUrl: './watch-table.component.html',
  styleUrls: ['./watch-table.component.css']
})
export class WatchTableComponent implements OnInit, OnChanges {
  displayedColumns: string[] = [
    'symbol',
    'name',
    'latestPrice',
    'change',
    'latestTime'
  ];
  @Input() watchList: string[];
  @Input() assetType: AssetTypes;
  @Output() onNewAsset = new EventEmitter();


  quotes: Quote[] = [];
  assetList: Asset[] = [];

  constructor(
    private stockService: StockService,
    private cryptoService: CryptoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    if (this.assetType === AssetTypes.STOCK) {
      this.stockService.getAll().subscribe(list => {
        this.assetList = list;
      });
    } else if (this.assetType === AssetTypes.CRYPTO) {
      this.cryptoService.getAll().subscribe(list => {
        this.assetList = list;
      });
    }
    this.updateQuotes();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['watchList']) {
      if (changes['watchList'].previousValue) {
        this.updateQuotes();
      }
    }
  }

  public updateQuotes = () => {
    this.quotes = [];
    if (this.watchList != null && this.assetType != null) {
      for (const symbol of this.watchList) {
        if (this.assetType === AssetTypes.STOCK) {
          this.stockService.getTicker(symbol).subscribe(ticker => {
            this.quotes = this.quotes.concat(ticker);
          });
        } else if (this.assetType === AssetTypes.CRYPTO) {
          this.cryptoService.getTicker(symbol).subscribe(ticker => {
            this.quotes = this.quotes.concat(ticker);
          });
        }
      }
    }
  }

  public onAddAsset = (newAsset) => {
    if (newAsset.length > 0) {
      this.onNewAsset.emit(newAsset);
      // this.watchList.push(newAsset);
      this.openSnackBar(newAsset + ' added!', 'X');
      // this.updateQuotes();
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}

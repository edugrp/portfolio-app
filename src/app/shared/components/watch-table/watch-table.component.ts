import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Asset, Quote, AssetTypes } from '@core/models/asset';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-watch-table',
  templateUrl: './watch-table.component.html',
  styleUrls: ['./watch-table.component.css']
})
export class WatchTableComponent implements OnInit {
  displayedColumns: string[] = [
    'symbol',
    'name',
    'latestPrice',
    'change',
    'latestTime'
  ];

  @Input() quotes: Quote[];
  @Input() assetList: Asset[];
  @Output() newAssetAdded = new EventEmitter();

  constructor(
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
  }

  public onAddAsset = (newAsset) => {
    if (newAsset.length > 0) {
      this.newAssetAdded.emit(newAsset);
      this.openSnackBar(newAsset + ' added!', 'X');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}

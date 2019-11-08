import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Asset } from '@core/models/asset';

@Component({
  selector: 'app-button-add-asset',
  templateUrl: './button-add-asset.component.html',
  styleUrls: ['./button-add-asset.component.css']
})
export class ButtonAddAssetComponent implements OnInit {

  @Output() onAddSelected = new EventEmitter();
  addAsset = '';
  @Input() assetList: Asset[] = [];

  constructor() { }

  ngOnInit() {
  }

  public onAddAsset = () => {
    if (this.addAsset.length > 0) {
      this.onAddSelected.emit(this.addAsset);
      this.addAsset = '';
    }
  };

}

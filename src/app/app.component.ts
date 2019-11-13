import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCore from '@core/store/core.reducer';
import { loadStockList, loadCryptoList } from '@core/store/core.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-app';

  constructor(
    private store: Store<fromCore.State>
  ) {
    console.log('AppComponent loaded');
    this.store.dispatch(loadStockList());
    this.store.dispatch(loadCryptoList());
  }

}

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import {
  addStockStarted,
  addStock,
  addCryptoStarted,
  addCrypto
} from './my-wallet.actions';

import { CryptoService } from '@core/services/crypto.service';
import { StockService } from '@core/services/stock.service';
import { Quote } from '@core/models/asset';

@Injectable()
export class MyWalletEffects {
  constructor(
    private actions$: Actions,
    private stockService: StockService,
    private cryptoService: CryptoService
  ) {}

  addStocks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addStockStarted.type),
      mergeMap(({symbol}) =>
        this.stockService.getTicker(symbol).pipe(
          map((newStock: Quote) => addStock({ newStock })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addCryptos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCryptoStarted.type),
      mergeMap(({symbol}) =>
        this.cryptoService.getTicker(symbol).pipe(
          map((newCrypto: Quote) => addCrypto({ newCrypto })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}

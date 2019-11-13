import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap, filter } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import {
  loadStockList,
  loadCryptoList,
  setStockList,
  setCryptoList
} from './core.actions';

import { CryptoService } from '@core/services/crypto.service';
import { StockService } from '@core/services/stock.service';
import { Asset } from '@core/models/asset';

@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions,
    private stockService: StockService,
    private cryptoService: CryptoService
  ) {}

  loadStocks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadStockList.type),
      mergeMap(() =>
        this.stockService.getAll().pipe(
          map((payload: Asset[]) => setStockList({ payload })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadCryptos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCryptoList.type),
      mergeMap(() =>
        this.cryptoService.getAll().pipe(
          map((payload: Asset[]) => setCryptoList({ payload })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}

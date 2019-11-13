import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import {
  addToTableListStarted,
  addToTableList,
  addToCardListStarted,
  addToCardList
} from './stock.actions';

import { StockService } from '@core/services/stock.service';
import { Quote } from '@core/models/asset';

@Injectable()
export class StockEffects {
  constructor(
    private actions$: Actions,
    private stockService: StockService
  ) {}

  addToTableList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToTableListStarted.type),
      mergeMap(({symbol}) =>
        this.stockService.getTicker(symbol).pipe(
          map((newItem: Quote) => addToTableList({ newItem })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addToCardList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToCardListStarted.type),
      mergeMap(({symbol}) =>
        this.stockService.getTicker(symbol).pipe(
          map((newItem: Quote) => addToCardList({ newItem })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}

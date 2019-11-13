import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import {
  addToTableListStarted,
  addToTableList,
  addToCardListStarted,
  addToCardList
} from './crypto.actions';

import { CryptoService } from '@core/services/crypto.service';
import { Quote } from '@core/models/asset';

@Injectable()
export class CryptoEffects {
  constructor(
    private actions$: Actions,
    private cryptoService: CryptoService
  ) {}

  addToTableList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToTableListStarted.type),
      mergeMap(({symbol}) =>
        this.cryptoService.getTicker(symbol).pipe(
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
        this.cryptoService.getTicker(symbol).pipe(
          map((newItem: Quote) => addToCardList({ newItem })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}

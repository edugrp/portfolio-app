import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { login, loginStarted, logout, logoutStarted } from './auth.actions';

import { AuthService } from '@core/services/auth.service';
import { User } from '@core/models/user';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  loginStarted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStarted.type),
      mergeMap(() =>
        this.authService.login().pipe(
          map((newUser: User) => login({ user: newUser })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  logoutStarted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logoutStarted.type),
      mergeMap(() =>
        this.authService.logout().pipe(
          map(() => logout()),
          catchError(() => EMPTY)
        )
      )
    )
  );
}

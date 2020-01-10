import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../auth/store/auth.reducer';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from '../../../auth/store/auth.selectors';
import { logoutStarted } from './../../../auth/store/auth.actions';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;
  public isLoggedOut$: Observable<boolean>;

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(isLoggedIn);
    this.isLoggedOut$ = this.store.select(isLoggedOut);
  }

  logout() {
    this.store.dispatch(logoutStarted());
  }
}

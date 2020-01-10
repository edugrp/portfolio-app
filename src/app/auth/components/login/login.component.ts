import { Component, OnInit } from '@angular/core';

import * as fromAuth from '../../store/auth.reducer';
import { Store } from '@ngrx/store';
import { loginStarted } from '../../store/auth.actions';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  googleLogoURL = '/assets/Google.svg';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private store: Store<fromAuth.State>
  ) {
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL)
    );
  }

  ngOnInit() {}

  login() {
    this.store.dispatch(loginStarted());
  }
}

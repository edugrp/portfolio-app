import { Observable, of, from } from 'rxjs';
import { User } from '@core/models/user';
import { Injectable } from '@angular/core';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  // Auth logic to run auth providers
  private authenticationProviderLogin(provider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(result => {
        console.log('You have been successfully logged in!');
        console.log(result);

        return this.extractUser(result);
      })
      .catch(error => {
        console.log(error);
        return undefined;
      });
  }

  public login(): Observable<User> {
    return from(
      this.authenticationProviderLogin(new auth.GoogleAuthProvider())
    );
  }

  public logout(): Observable<boolean> {
    return of(true);
  }

  private extractUser(user: auth.UserCredential): User {
    return {
      uid: user.user.uid,
      email: user.user.email,
      name: user.user.displayName,
      firstName: user.additionalUserInfo.profile['given_name'],
      lastName: user.additionalUserInfo.profile['family_name'],
      photoUrl: user.user.photoURL,
      refreshToken: user.user.refreshToken
    };
  }
}

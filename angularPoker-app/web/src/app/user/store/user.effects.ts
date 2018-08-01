import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { UserActions, UserLoggedIn, UserActionTypes } from './user.actions';
import { mergeMap, map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserEffects {
  private static googleProvider = new firebase.auth.GoogleAuthProvider();

  @Effect()
  effect$ = this.actions$.ofType(UserActionTypes.LogInUser)
    .pipe(mergeMap(() => this.afAuth.auth.signInWithPopup(UserEffects.googleProvider)),
          mergeMap((test) => this.afAuth.user),
          map(user => new UserLoggedIn(
            {
              displayName: user.displayName,
              email: user.email,
              emailVerified: user.emailVerified,
              photoUrl: user.photoURL,
              providerData: user.providerData,
              uid: user.uid
            }
          ) ))

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth) {}
}

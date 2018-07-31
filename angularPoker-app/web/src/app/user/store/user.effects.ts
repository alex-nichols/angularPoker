import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { UserActions, UserActionTypes } from './user.actions';
import { mergeMap } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserEffects {
  private static googleProvider = new firebase.auth.GoogleAuthProvider();
  @Effect()
  effect$ = this.actions$.ofType(UserActionTypes.LogInUser)
    .pipe(mergeMap(() => this.afAuth.auth.signInWithPopup(UserEffects.googleProvider)))

  constructor(private actions$: Actions,
              private afAuth: AngularFireAuth) {}
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoadAccount, AccountLoaded, AccountActionTypes } from '../actions/account.actions';
import { AccountService } from '../../services/account.service';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class AccountEffects {

  @Effect()
  effect$ = this.actions$.pipe(
            ofType<LoadAccount>(AccountActionTypes.LoadAccount),
            mergeMap((action) => this.accountService.loadAccount(action.payload.uid)),
            map(account => new AccountLoaded({account}))
          );

  constructor(private actions$: Actions,
              private accountService: AccountService) {}
}

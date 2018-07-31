import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LogInUser = '[User] LogIn User',
  LogOutUser = '[User] LogOut User'
}

export class LogInUser implements Action {
  readonly type = UserActionTypes.LogInUser;
}

export class LogOutUser implements Action {
  readonly type = UserActionTypes.LogOutUser;
}


export type UserActions = LogInUser
                        | LogOutUser;

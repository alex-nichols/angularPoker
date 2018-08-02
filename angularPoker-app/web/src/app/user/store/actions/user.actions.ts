import { Action } from '@ngrx/store';
import { User } from 'firebase';
import { UserProfile } from '../../models/user.profile.model';

export enum UserActionTypes {
  LogInUser = '[User] LogIn User',
  LogOutUser = '[User] LogOut User',
  UserLoggedIn = '[User] Logged In'
}

export class LogInUser implements Action {
  readonly type = UserActionTypes.LogInUser;
}

export class LogOutUser implements Action {
  readonly type = UserActionTypes.LogOutUser;
}

export class UserLoggedIn implements Action {
  readonly type = UserActionTypes.UserLoggedIn

  constructor(public payload: { profile: UserProfile }) {}
}

export type UserActions = LogInUser
                        | LogOutUser
                        | UserLoggedIn;

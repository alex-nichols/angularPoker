import { Action, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.actions';
import { AppUser } from '../models/app.user.model';

export const featureName = 'user';

export interface State {
  user: AppUser
}

export const initialState: State = {
  user: null
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    case UserActionTypes.LogInUser:
      return state;

    case UserActionTypes.LogOutUser:
      return state;

    case UserActionTypes.UserLoggedIn:
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
}


export const selectFeature = (state: any) => state.user
export const selectUser = createSelector(selectFeature, (state: State) => state.user)
export const selectIsLoggedIn = createSelector(selectFeature, (state: State): boolean => !!state.user.uid )
import { Action, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from '../actions/user.actions';
import { UserProfile } from '../../models/user.profile.model';


export interface State {
  profile: UserProfile
}

export const initialState: State = {
  profile: null
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
        profile: action.payload.profile
      }

    default:
      return state;
  }
}


export const selectUserState = (state: any) => state.userFeature
export const selectUserProfile = createSelector(selectUserState, (state: State) => state.profile)
export const selectIsLoggedIn = createSelector(selectUserState, (state: State): boolean => !!state.profile )

import * as account from './account.reducer'
import * as user from './user.reducer'
import { ActionReducerMap } from '@ngrx/store';

export const reducer: ActionReducerMap<any> = {
    account: account.reducer,
    user: user.reducer
}

export const featureName = 'userFeature';

export const selectFeature = (state: any) => state.userFeature

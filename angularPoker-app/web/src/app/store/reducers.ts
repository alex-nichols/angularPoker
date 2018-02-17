import * as DeckReducer from '../deck/reducers'
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
    cardComponent: DeckReducer.reducer
}

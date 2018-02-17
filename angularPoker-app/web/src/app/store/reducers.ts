import * as DeckReducer from '../card-components/store/deck.reducer'
import * as DeckStore from '../card-components/store/store'
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    cardComponent: DeckReducer.DeckState
}

export const reducers: ActionReducerMap<AppState> = {
    cardComponent: DeckReducer.reducer
}

import { Action, createSelector } from '@ngrx/store'
import { AppState } from './store'
import * as DeckActions from './deck.action'

import { ArrayUtil } from '../util/array.util'

// TODO: This needs to move to card-components
import { Card } from '../card-components/models/card';


export interface DeckState {
    deckIndex: number
    deck: Card[]
    dealtCards: Card[]
    loaded: boolean
}

const initialState: DeckState = {
    deckIndex: 0,
    deck: [],
    dealtCards: [],
    loaded: false
}

export function reducer(state: DeckState = initialState, action: DeckActions.Actions): DeckState {
    switch (action.type) {
        case DeckActions.types.LOAD: {
            return state
        }
        case DeckActions.types.LOADED: {
            const temp = action as DeckActions.Loaded;
            return {...state, loaded: true, deck: temp.deck }
        }
        case DeckActions.types.REQUEST_CARDS: {
            return state
        }
        case DeckActions.types.DEAL: {
            const temp = action as DeckActions.Deal
            return {...state, dealtCards: state.dealtCards.slice().concat(temp.cards)}
        }
        case DeckActions.types.SHUFFLE: {
            return state // {...state, deck: ArrayUtil.shuffleInPlace(state.deck)}
        }
        default: {
            return state
        }
    }
}

export const dealtCards = (state: AppState) => state.deck.dealtCards

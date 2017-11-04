import { Action } from '@ngrx/store'

import * as DeckActions from './deck.action'
import { Card } from '../models/card'
import { ArrayUtil } from '../util/array.util'


export class DeckState {
    deckIndex: 0
    deck: Card[] = []
    dealtCards: Card[] = []
    loaded = false
}

export function deckReducer(state: DeckState = new DeckState(), action: DeckActions.actions): DeckState {
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
            return {...state, dealtCards: [...state.dealtCards, temp.card]}
        }
        case DeckActions.types.SHUFFLE: {
            return state //{...state, deck: ArrayUtil.shuffleInPlace(state.deck)}
        }
        default: {
            return state
        }
    }
}

export const dealtCards = (state: DeckState) => state.dealtCards

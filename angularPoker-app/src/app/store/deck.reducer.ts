import { Action } from '@ngrx/store'

import * as DeckActions from './deck.action'
import { Card } from '../models/card'



class DeckState {
    deckIndex: 0
    deck: Card[] = []
}

export function deckReducer(state: DeckState = new DeckState(), action: Action) {
    switch (action.type) {
        case DeckActions.LOAD: {
            return state
        }
        case DeckActions.DEAL: {
            return state
        }
        case DeckActions.SHUFFLE: {
            return state
        }
    }
}


import * as DeckReducers from './deck.reducer'
import { DeckEffects } from './deck.effects'

export const store = {
        deck: DeckReducers.reducer
    }

export const effects = [DeckEffects]

export interface AppState {
    deck: DeckReducers.DeckState
}


import { deckReducer, DeckState } from './deck.reducer'
import { DeckEffects } from './deck.effects'

export const store = {
        deck: deckReducer
    }

export const effects = [DeckEffects]

export interface AppState {
    deck: DeckState
}

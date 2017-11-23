
import * as DeckReducers from './deck.reducer'
import { DeckEffects } from './deck.effects'

import * as GameReducers from './game/game.reducer'
import { GameEffects } from './game/game.effects';


export const store = {
        deck: DeckReducers.reducer,
        game: GameReducers.reducer
    }

export const effects = [DeckEffects, GameEffects]

export interface AppState {
    deck: DeckReducers.DeckState
    game: GameReducers.GameState
}

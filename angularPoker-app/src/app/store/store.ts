
import { deckReducer } from './deck.reducer'

export const store = () => {
    return {
        deck: deckReducer
    }
}

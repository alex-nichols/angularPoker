import { Action, createSelector, createFeatureSelector } from '@ngrx/store'
import * as DeckActions from './deck.action'
import { Card } from '../models/card';

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

export const featureName = 'cardComponent'
export const selectFeature = createFeatureSelector<DeckState>(featureName)
export const dealtCards = createSelector(selectFeature, (state: DeckState) => state.dealtCards)
export const loaded = createSelector(selectFeature, (state: DeckState) => state.loaded)


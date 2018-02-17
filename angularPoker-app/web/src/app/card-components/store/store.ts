
import * as DeckReducers from './deck.reducer'
import { DeckEffects } from './deck.effects'
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const store = {
        deck: DeckReducers.reducer
    }

export const effects = [DeckEffects]

export interface DeckStore {
    deck: DeckReducers.DeckState
}

export const featureName = 'cardComponent'
export const selectFeature = createFeatureSelector<DeckReducers.DeckState>(featureName)
export const dealtCards = createSelector(selectFeature, (state: DeckReducers.DeckState) => state.dealtCards)

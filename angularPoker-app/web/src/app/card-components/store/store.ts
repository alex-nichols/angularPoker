
import * as DeckReducers from './deck.reducer'
import { DeckEffects } from './deck.effects'
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const effects = [DeckEffects]

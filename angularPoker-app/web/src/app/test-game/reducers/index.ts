import { Action, createSelector, createFeatureSelector } from '@ngrx/store'
import * as Actions from '../actions'
import { Card } from '../../deck/models/card';


export interface State {
    deckIndex: number
    deck: Card[]
    dealtCards: Card[]
    loaded: boolean
}

const initialState: State = {
    deckIndex: 0,
    deck: [],
    dealtCards: [],
    loaded: false
}

export function reducer(state: State = initialState, action: Actions.Actions): State {
    switch (action.type) {
        case Actions.types.LOAD: {
            return state
        }
        case Actions.types.LOADED: {
            const temp = action as Actions.Loaded;
            return {...state, loaded: true, deck: temp.deck }
        }
        case Actions.types.REQUEST_CARDS: {
            return state
        }
        case Actions.types.DEAL: {
            const temp = action as Actions.Deal
            return {...state, dealtCards: state.dealtCards.slice().concat(temp.cards)}
        }
        case Actions.types.SHUFFLE: {
            return state // {...state, deck: ArrayUtil.shuffleInPlace(state.deck)}
        }
        default: {
            return state
        }
    }
}

export const featureName = 'cardComponent'
export const selectFeature = createFeatureSelector<State>(featureName)
export const dealtCards = createSelector(selectFeature, (state: State) => state.dealtCards)
export const loaded = createSelector(selectFeature, (state: State) => state.loaded)


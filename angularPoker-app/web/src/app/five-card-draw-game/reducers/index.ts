import { Card } from '../../deck/models/card';
import { GameActions, GameActionTypes, GameError } from '../actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Game } from '../models/game';

export interface State {
    game: Game
    gameRequested: boolean
    loaded: boolean
    error: GameError
}

const initialState: State = {
    game: {
        playerCards: [],
        playerId: '',
        wager: 0
    },
    gameRequested: false,
    loaded: false,
    error: null
}

export function reducer(state: State = initialState, action: GameActions): State {

    switch (action.type) {
        case GameActionTypes.RequestGame: {
            return {
                ...state,
                gameRequested: true,
                game: {
                    ...state.game,
                    wager: action.payload.wager,
                    playerId: action.payload.playerName
                }
            }
        }
        case GameActionTypes.GameLoaded:
        case GameActionTypes.GameUpdateRecieved: {
            return {
                ...state,
                game: action.payload,
                loaded: true
            }
        }
        case GameActionTypes.DiscardCards: {
            return {
                ...state
            }
        }
        case GameActionTypes.GameError: {
            return {
                ...state,
                error: action.payload
            }
        }
        default:
            return state
    }
}

export const featureName = 'fiveCardComponent'
export const selectFeature = createFeatureSelector<State>(featureName)
export const selectGame = createSelector(selectFeature, (state: State) => state.game)

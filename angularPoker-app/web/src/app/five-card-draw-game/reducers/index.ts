import { Card } from '../../deck/models/card';
import { GameActions, GameActionTypes } from '../actions';
import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { Game } from '../models/game';

const initialState: Game = {
        playerHand: [],
        playerId: '',
        wager: 0,
        gameRequested: false,
        loaded: false,
        error: null
}

export function reducer(state: Game = initialState, action: GameActions): Game {

    switch (action.type) {
        case GameActionTypes.RequestGame: {
            return {
                ...state,
                gameRequested: true,
                wager: action.payload.wager,
                playerId: action.payload.playerName
            }
        }
        case GameActionTypes.GameLoaded:
        case GameActionTypes.GameUpdateRecieved: {
            return action.payload
        }
        case GameActionTypes.ToggleCardSelection: {
            return {
                ...state,
                playerHand: state.playerHand.map(card => {
                    if (card === action.payload) {
                        card.onHold = !card.onHold
                    }
                    return card
                })
            }
        }
        case GameActionTypes.RequestDiscard: {
            return {
                ...state
            }
        }
        case GameActionTypes.GameErrorRecieved: {
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
export const selectFeature = createFeatureSelector<Game>(featureName)
export const selectGame = createSelector(selectFeature, (state: Game) => state)

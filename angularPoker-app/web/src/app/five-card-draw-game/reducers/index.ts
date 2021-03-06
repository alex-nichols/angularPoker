import { Card } from '../../deck/models/card';
import { GameActions, GameActionTypes } from '../actions';
import { createFeatureSelector, createSelector, select } from '@ngrx/store';
import { Game, GameSteps } from '../models/game';
import { HandTypes } from '../models/hand.types';
import { DefaultPaytable } from '../models/paytable';

const initialState: Game = {
        gameId: '',
        playerHand: [],
        paytable: DefaultPaytable,
        handValue: HandTypes.highestCard,
        playerId: '',
        wager: 0,
        error: null,
        step: GameSteps.New
}

export function reducer(state: Game = initialState, action: GameActions): Game {

    switch (action.type) {
        case GameActionTypes.RequestGame: {
            return {
                ...state,
                step: GameSteps.Loading,
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
                ...state,
                step: GameSteps.DiscardRequested
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
export const selectStep = createSelector(selectGame, (game: Game) => game.step)

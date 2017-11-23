import { Action, createSelector } from '@ngrx/store'
import * as GameActions from './game.action'
import { Game } from '../../models/game'
import { AppState } from '../store';

export type GameState = Game

const initialState: GameState = {
    id: "",
    players: []
}

export function reducer(state: GameState, action: GameActions.Actions): GameState {
    switch (action.type) {
        case GameActions.types.PLAYER_READY: 
        case GameActions.types.PLAYER_DISCARD_CARDS:
        case GameActions.types.REGISTER: {
            return state
        }
        case GameActions.types.SERVER_GAME_UPDATE: {
            const temp = action as GameActions.ServerGameUpdate
            return temp.game
        }
        case GameActions.types.PLAYER_SELECT_CARD: {
            const temp = action as GameActions.PlayerSelectCard
            return {...state, 
                    players: {...state.players,
                            [0]: {...state.players[0], 
                                  hand: state.players[0].hand.map(c => {
                                      if(c === temp.card) { 
                                        return {...c, isSelected: temp.isSelected}
                                      } else {
                                          return c
                                      }
                                  })
                                }
                            }
                    }
        }
    }
}

export const gameId = (state: AppState) => state.game.id
export const playerOne = (state: AppState) => state.game.players[0]

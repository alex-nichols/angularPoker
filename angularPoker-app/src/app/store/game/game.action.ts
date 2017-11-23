import { Action } from '@ngrx/store'
import { Game } from '../../models/game'
import { Card } from '../../models/card';

export const types = {
    REGISTER: "[GAME] REGISTER",
    PLAYER_READY: "[GAME] PLAYER_READY",
    PLAYER_DISCARD_CARDS: "[GAME] DISCARD_CARDS",
    PLAYER_SELECT_CARD: "[GAME] PLAYER_SELECT_CARD",
    SERVER_GAME_UPDATE: "[GAME] SERVER_GAME_UPDATE"
}

export class Register implements Action {
    readonly type = types.REGISTER

    constructor(public playerName: string) { }
}

export class PlayerReady implements Action {
    readonly type = types.PLAYER_READY
    constructor(public gameId: string) { }
}

export class PlayerDiscardCards implements Action {
    readonly type = types.PLAYER_DISCARD_CARDS

    constructor(public gameId: string) { }
}

export class PlayerSelectCard implements Action {
    readonly type = types.PLAYER_SELECT_CARD
    constructor(public gameId: string,
                public card: Card,
                public isSelected: boolean) { }
}

export class ServerGameUpdate implements Action {
    readonly type = types.SERVER_GAME_UPDATE

    constructor(public game: Game) { }
}

export type Actions 
    = Register
    | PlayerReady
    | PlayerDiscardCards
    | PlayerSelectCard
    | ServerGameUpdate 

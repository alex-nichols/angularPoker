import { Game } from '../models/game';
import { Card } from '../../deck/models/card';
import { GameError } from '../models/game.error';

export enum GameActionTypes {
    RequestGame = '[Game] Request Game',
    GameLoaded = '[Game] Game Recieved',
    GameErrorRecieved = '[Game] Game Error Recieved',
    GameUpdateRecieved = '[Game] Game Update Recieved',
    RequestDiscard = '[Game] Request Discard',
    ToggleCardSelection = '[Game] Toggle Card Selection',
}

export class RequestGame {
    readonly type = GameActionTypes.RequestGame

    constructor(public payload: {playerName: string, wager: number}) { }
}

export class GameLoaded {
    readonly type = GameActionTypes.GameLoaded

    constructor(public payload: Game) { }
}

export class GameErrorRecieved {
    readonly type = GameActionTypes.GameErrorRecieved

    constructor(public payload: GameError) { }
}

export class GameUpdateRecieved {
    readonly type = GameActionTypes.GameUpdateRecieved

    constructor(public payload: Game) { }
}

export class RequestDiscard {
    readonly type = GameActionTypes.RequestDiscard

    constructor() { }
}

export class ToggleCardSelection {
    readonly type = GameActionTypes.ToggleCardSelection

    constructor(public payload: Card) { }
}



export type GameActions = | RequestGame
                          | GameLoaded
                          | GameErrorRecieved
                          | GameUpdateRecieved
                          | ToggleCardSelection
                          | RequestDiscard

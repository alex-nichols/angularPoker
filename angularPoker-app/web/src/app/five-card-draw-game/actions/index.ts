import { Game } from '../models/game';
import { Card } from '../../deck/models/card';

export enum GameActionTypes {
    RequestGame = '[Game] Request Game',
    GameLoaded = '[Game] Game Recieved',
    GameError = '[Game] Game Request Error',
    GameUpdateRecieved = '[Game] Game Update Recieved',
    DiscardCards = '[Game] Discard Cards'
}

export class RequestGame {
    readonly type = GameActionTypes.RequestGame

    constructor(public payload: {playerName: string, wager: number}) { }
}

export class GameLoaded {
    readonly type = GameActionTypes.GameLoaded

    constructor(public payload: Game) { }
}

export class GameError {
    readonly type = GameActionTypes.GameError

    constructor(public payload: GameError) { }
}

export class GameUpdateRecieved {
    readonly type = GameActionTypes.GameUpdateRecieved

    constructor(public payload: Game) { }
}

export class DiscardCards {
    readonly type = GameActionTypes.DiscardCards

    constructor(public payload: Card[]) { }
}

export type GameActions = | RequestGame | GameLoaded | GameError | GameUpdateRecieved | DiscardCards
 
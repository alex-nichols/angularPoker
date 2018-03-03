import { Action } from '@ngrx/store'
import { Card } from '../../deck/models/card';

export const types = {
    LOAD: 'TEST_GAME_LOAD',
    LOADED: 'TEST_GAME_LOADED',
    SHUFFLE: 'TEST_GAME_SHUFFLE',
    SHUFFLE_COMPLETE: 'TEST_GAME_SHUFFLE_COMPLETE',
    DEAL: 'TEST_GAME_DEAL',
    REQUEST_CARDS: 'TEST_GAME_REQUEST_CARD'
}


export class Load implements Action {
    readonly type = types.LOAD
}

export class Loaded implements Action {
    readonly type = types.LOADED
    constructor(public deck: Card[]) { }
}

export class Shuffle implements Action {
    readonly type = types.SHUFFLE
}

export class ShuffleComplete implements Action {
    readonly type = types.SHUFFLE_COMPLETE
}

export class RequestCards implements Action {
    readonly type = types.REQUEST_CARDS

    constructor(public payload: number) { }
}

export class Deal implements Action {
    readonly type = types.DEAL

    constructor(public cards: Card[]) { }
}

export type Actions
    = Load
    | Shuffle
    | Deal
    | Loaded
    | ShuffleComplete
    | RequestCards

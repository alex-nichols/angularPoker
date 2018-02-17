import { Action } from '@ngrx/store'
import { Card } from '../models/card'

export const types = {
    LOAD: 'DECK_LOAD',
    LOADED: 'DECK_LOADED',
    SHUFFLE: 'DECK_SHUFFLE',
    SHUFFLE_COMPLETE: 'DECK_SHUFFLE_COMPLETE',
    DEAL: 'DECK_DEAL',
    REQUEST_CARDS: 'DECK_REQUEST_CARD'
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

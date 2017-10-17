import { All } from 'tslint/lib/rules/completedDocsRule';
import { Action } from '@ngrx/store'

export const LOAD = 'DECK_LOAD'
export const SHUFFLE = 'DECK_SHUFFLE'
export const DEAL = 'DECK_DEAL'

export class Load implements Action {
    readonly type = LOAD
}

export class Shuffle implements Action {
    readonly type = SHUFFLE
}

export class Deal implements Action {
    readonly type = DEAL
}

export type All
    = Load
    | Shuffle
    | Deal

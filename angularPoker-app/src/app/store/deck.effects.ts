import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Action } from '@ngrx/store'
import { Actions, Effect } from '@ngrx/effects'
import { of } from 'rxjs/observable/of'
import { DeckService } from '../services/deck.service'

import * as DeckActions from './deck.action'
import { Card } from '../models/card'

@Injectable()
export class DeckEffects {
    constructor(private _deckService: DeckService,
                private _actions$: Actions) { }

    @Effect()
    load$: Observable<Action> = this._actions$.ofType(DeckActions.types.LOAD)
        .mergeMap(action =>
            // first load the deck
            this._deckService.LoadDeck()
                .map(cards => {
                    // then be sure to shuffle
                    this._deckService.shuffle(cards)
                    return {type: DeckActions.types.LOADED, cards: cards}
                })
                .catch(() => of({type: 'DECK_LOAD_FAILED'})
            )
        )

    @Effect()
    requestCards$: Observable<Action> = this._actions$.ofType<DeckActions.RequestCards>(DeckActions.types.REQUEST_CARDS)
        .mergeMap(action =>
            this._deckService.deal(action.payload)
                .map(cards => new DeckActions.Deal(cards))
        )
}

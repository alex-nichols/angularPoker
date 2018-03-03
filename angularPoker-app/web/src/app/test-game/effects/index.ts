import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Action } from '@ngrx/store'
import { Actions, Effect } from '@ngrx/effects'
import { of } from 'rxjs/observable/of'

import * as GameActions from '../actions'
import { DeckService } from '../../deck/services/deck.service';


@Injectable()
export class GameEffects {
    constructor(private _deckService: DeckService,
                private _actions$: Actions) { }

    @Effect()
    load$: Observable<Action> = this._actions$.ofType(GameActions.types.LOAD)
        .mergeMap(action =>
            // first load the deck
            this._deckService.LoadDeck()
                .map(cards => {
                    // then be sure to shuffle
                    this._deckService.shuffle(cards)
                    return {type: GameActions.types.LOADED, cards: cards}
                })
                .catch(() => of({type: 'DECK_LOAD_FAILED'})
            )
        )

    @Effect()
    requestCards$: Observable<Action> = this._actions$.ofType<GameActions.RequestCards>(GameActions.types.REQUEST_CARDS)
        .mergeMap(action =>
            this._deckService.deal(action.payload)
                .map(cards => new GameActions.Deal(cards))
        )
}

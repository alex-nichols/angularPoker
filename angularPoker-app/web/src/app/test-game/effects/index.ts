
import {mergeMap, map, catchError} from 'rxjs/operators';





import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Action } from '@ngrx/store'
import { Actions, Effect } from '@ngrx/effects'

import * as GameActions from '../actions'
import { DeckService } from '../../deck/services/deck.service';


@Injectable()
export class GameEffects {
    constructor(private _deckService: DeckService,
                private _actions$: Actions) { }

    @Effect()
    load$: Observable<Action> = this._actions$.ofType(GameActions.types.LOAD).pipe(
        mergeMap(action =>
            // first load the deck
            this._deckService.LoadDeck().pipe(
                map(cards => {
                    // then be sure to shuffle
                    this._deckService.shuffle(cards)
                    return {type: GameActions.types.LOADED, cards: cards}
                }),
                catchError(() => of({type: 'DECK_LOAD_FAILED'})
            ),)
        ))

    @Effect()
    requestCards$: Observable<Action> = this._actions$.ofType<GameActions.RequestCards>(GameActions.types.REQUEST_CARDS).pipe(
        mergeMap(action =>
            this._deckService.deal(action.payload).pipe(
                map(cards => new GameActions.Deal(cards)))
        ))
}

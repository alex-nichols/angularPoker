import { Injectable } from '@angular/core';
import { GameService } from '../services/game';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';

import * as GameReducers from '../reducers'
import { RequestGame, GameActionTypes, GameLoaded, RequestDiscard, GameUpdateRecieved, } from '../actions';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { Game } from '../models/game';
import { Observable } from 'rxjs';

@Injectable()
export class GameEffects {

    @Effect()
    public loadGame$ = this.actions$.pipe(
        ofType<RequestGame>(GameActionTypes.RequestGame),
        switchMap(action => {
            return this.gameService
                   .createGame(action.payload.playerName, action.payload.wager)
                   .pipe(
                       map((game: Game) => new GameLoaded(game))
                   )
        })
    )

    @Effect()
    public requestDiscard = this.actions$.pipe(
        ofType<RequestDiscard>(GameActionTypes.RequestDiscard),
        withLatestFrom(this.store$.pipe(select(GameReducers.selectGame))),
        switchMap(([action, game]) => {
            return this.gameService.discardCards(game).pipe(
                        map((updateGame: Game) => new GameUpdateRecieved(updateGame))
                    )
        })

    )

    constructor(private actions$: Actions,
                private store$: Store<Game>,
                private gameService: GameService) {

    }
}

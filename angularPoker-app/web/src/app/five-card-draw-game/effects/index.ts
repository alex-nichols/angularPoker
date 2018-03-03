import { Injectable } from '@angular/core';
import { GameService } from '../services/game';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { RequestGame, GameActionTypes, GameLoaded } from '../actions';
import { switchMap, map } from 'rxjs/operators';
import { Game } from '../models/game';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GameEffects {

    @Effect()
    loadGame$: Observable<Action> = this.actions$.pipe(
        ofType<RequestGame>(GameActionTypes.RequestGame),
        switchMap(action => {
            return this.gameService
                   .createGame(action.payload.playerName, action.payload.wager)
                   .pipe(
                       map((game: Game) => new GameLoaded(game))
                   )
        })
    )

    constructor(private actions$: Actions,
                private gameService: GameService) {

    }
}

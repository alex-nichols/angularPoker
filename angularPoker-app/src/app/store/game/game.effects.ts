import { Injectable } from "@angular/core";
import { GameService } from "../../services/game.service";
import { Actions, Effect } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as GameActions from './game.action'
import { AppState } from "../store";

@Injectable()
export class GameEffects {
    constructor(private _gameService: GameService,
                private _actions$: Actions,
                private _store$: Store<AppState>) { }
    
    @Effect()
    playerReady$: Observable<Action> = this._actions$.ofType(GameActions.types.PLAYER_READY)
        .mergeMap(action => {
            const temp = action as GameActions.PlayerReady
            return this._gameService.playerNext(temp.gameId)
                    .map(game => new GameActions.ServerGameUpdate(game))
    })

    @Effect()
    register$: Observable<Action> = this._actions$.ofType(GameActions.types.REGISTER)
        .mergeMap(action => {
            const temp = action as GameActions.Register
            return this._gameService.registerGame(temp.playerName)
                .map(game => new GameActions.ServerGameUpdate(game))
        })

    @Effect()
    playerSelectCards$: Observable<Action> = this._actions$.ofType(GameActions.types.PLAYER_DISCARD_CARDS)
        .withLatestFrom(this._store$)
        .mergeMap(([action, state]) => {
            const temp = action as GameActions.PlayerDiscardCards
            return this._gameService.playerChooseCards(temp.gameId, state.game.players[0].hand.filter(c => c.isSelected))
                .map(game => new GameActions.ServerGameUpdate(game))
        })
}
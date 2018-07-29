import { Component, OnInit } from '@angular/core';
import * as GameReducers from '../../reducers';
import * as GameActions from '../../actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Card } from '../../../deck/models/card';
import { Game, GameSteps } from '../../models/game';
import { debug } from '../../../util/operators/debug';
import { tap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { GameService } from '../../services/game';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {
  public game$: Observable<Game>
  public step$: Observable<GameSteps>

  public gameSteps = GameSteps


  constructor( private gameStore: Store<Game>,
               private titleService: Title,
               private gameService: GameService) {
    this.game$ = gameStore.pipe(select(GameReducers.selectGame))
    this.step$ = gameStore.pipe(select(GameReducers.selectStep))

    this.game$ = this.game$.pipe(tap(game => console.log('Current Hand is a:', game.handValue)))

    this.titleService.setTitle('Five Card Draw')
  }

  ngOnInit() {
    this.gameStore.dispatch(new GameActions.RequestGame({playerName: 'Alex', wager: 100}))
  }

  public onCardClicked(card: Card) {
    this.gameStore.dispatch(new GameActions.ToggleCardSelection(card))
  }

  public onDiscardClicked() {
    this.gameStore.dispatch(new GameActions.RequestDiscard())
  }

  public onNewGameClicked() {
    this.gameStore.dispatch(new GameActions.RequestGame({playerName: 'Alex', wager: 100}))
  }

  public onBetOne() {
    ///this.gameStore.dispatch(new GameActions.)
  }

  public onBetMax() {
    // TODO
  }

}

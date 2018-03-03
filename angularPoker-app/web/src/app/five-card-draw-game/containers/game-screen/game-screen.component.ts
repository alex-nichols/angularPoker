import { Component, OnInit } from '@angular/core';
import * as GameReducers from '../../reducers';
import * as GameActions from '../../actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Card } from '../../../deck/models/card';
import { Game } from '../../models/game';
import { debug } from '../../../util/operators/debug';
import { tap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {
  public state$: Observable<GameReducers.State>
  public game$: Observable<Game>

  constructor( private gameStore: Store<GameReducers.State>,
               private titleService: Title) {
    this.state$ = gameStore.pipe(select(GameReducers.selectFeature))
    this.game$ = gameStore.pipe(select(GameReducers.selectGame))

    this.titleService.setTitle('Five Card Draw')
  }

  ngOnInit() {
    this.gameStore.dispatch(new GameActions.RequestGame({playerName: 'Alex', wager: 100}))
  }

  public requestGame() {

  }

  public onCardClicked(card: Card) {
    this.gameStore.dispatch(new GameActions.ToggleCardSelection(card))
  }

}

import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'

import { AppState } from '../../store/store'
import * as DeckActions from '../../store/deck.action'
import { Card } from '../../models/card'
import { CardComponent } from '../card/card.component'
import { DeckService } from '../../services/deck.service'
import * as DeckReducer from '../../store/deck.reducer'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public hand: Card[]
  public dealtCards: Observable<Card[]>
  public loaded: Observable<boolean>
  public isDisabled: Boolean = false
  public dealDelay = 75

  constructor(private _deck: DeckService,
              private _store: Store<AppState>) {
    this.loaded = _store.select(state => state.deck.loaded)
    this.dealtCards =  _store.select(DeckReducer.dealtCards)
                      .concatMap(x => x) // split the array, however this works.. i'm so confused
                      .map(x => Observable.of(x).delay(this.dealDelay)) // create delay
                      .concatAll() // concat delay and cards
                      .scan((acc, value) => { // collect the cards into an array and emit
                        acc.push(value)
                        return acc
                      }, [])
  }

  public deal(count: number = 51) {
    this.isDisabled = true
    this._store.dispatch(new DeckActions.RequestCards(count))
  }

  ngOnInit() {
    this._store.dispatch(new DeckActions.Load())
  }

}

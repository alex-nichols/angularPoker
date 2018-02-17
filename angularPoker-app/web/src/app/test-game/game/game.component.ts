import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store, select } from '@ngrx/store'
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'

import { Card } from '../../deck/models/card';
import { DeckService } from '../../deck/services/deck.service';
import * as DeckReducers from '../../deck/reducers';
import * as DeckActions from '../../deck/actions';
// very cool list animation from: https://coursetro.com/posts/code/78/Creating-Stagger-Animations-in-Angular-4

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class GameComponent implements OnInit {
  public hand: Card[]
  public dealtCards: Observable<Card[]>
  public loaded: Observable<boolean>
  public isDisabled: Boolean = false
  public dealDelay = 75

  constructor(private _deck: DeckService,
              private _deckStore: Store<DeckReducers.DeckState>) {
    this.loaded = _deckStore.pipe(select(state => state.loaded))
    // this was ill concieved. I should just let the renderer deal with this
    // this.dealtCards =  _store.select(DeckReducer.dealtCards)
    //                   .do(x => this.isDisabled = false)
    //                   .concatMap(x => x) // split the array, however this works.. i'm so confused
    //                   .map(x => Observable.of(x).delay(this.dealDelay)) // create delay
    //                   .concatAll() // concat delay and cards
    //                   .scan((acc, value) => { // collect the cards into an array and emit
    //                     acc.push(value)
    //                     return acc
    //                   }, [])
    this.dealtCards = _deckStore.pipe(select(DeckReducers.dealtCards))
                        .do(x => this.isDisabled = false)
  }

  public deal(count: number = 5) {
    this.isDisabled = true
    this._deckStore.dispatch(new DeckActions.RequestCards(count))
  }
 
  ngOnInit() {
    this._deckStore.dispatch(new DeckActions.Load())
  }

}

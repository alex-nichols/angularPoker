import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Store } from '@ngrx/store'
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'

import { AppState } from '../../store/store'
import * as DeckActions from '../../store/deck.action';
import { Card } from '../../models/card'
import { CardComponent } from '../card/card.component'
import { DeckService } from '../../services/deck.service'
//import * as DeckReducer from '../../store/deck.reducer';
import * as GameReducer  from '../../store/game/game.reducer'
import * as GameActions from '../../store/game/game.action'

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
  public playerCards$: Observable<Card[]>
  public gameId$: Observable<string>

  public loaded: Observable<boolean>
  public isDisabled: Boolean = false
  public dealDelay = 75
  public gameId: string

  constructor(private _deck: DeckService,
              private _store: Store<AppState>) {
    this.loaded = _store.select(state => state.deck.loaded)
    // todo: unsubscribe?
    this.playerCards$ = _store.select(GameReducer.playerOne)
                        .pluck('hand')
    this.gameId$ = _store.select(GameReducer.gameId)
                    .do(x => this.gameId = x)
  }

  public playerReady() {
    this._store.dispatch(new GameActions.PlayerReady(this.gameId))
  }

  public selectCard(card:Card) {
    this._store.dispatch(new GameActions.PlayerSelectCard(this.gameId, card, !card.isSelected))
  }

  public commitDiscard() {
    const selectedCards = 
    this._store.dispatch(new GameActions.PlayerDiscardCards(this.gameId))
  }

  ngOnInit() {
    this._store.dispatch(new DeckActions.Load())
  }

}

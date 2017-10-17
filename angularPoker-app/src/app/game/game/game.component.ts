import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'


import { Card } from '../../models/card'
import { CardComponent } from '../card/card.component'
import { DeckService } from '../../services/deck.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public hand: Card[] = []
  public loaded: Boolean = false
  public isDisabled: Boolean = false
  public dealDelay = 75

  constructor(private _deck: DeckService) { }

  public deal(count: number = 51) {
    this.isDisabled = true

    const delay = Observable.of(null).delay(this.dealDelay)

    this._deck.deal(count)
      .map(x => Observable.of(x).delay(this.dealDelay))
      .concatAll()
      .subscribe(
      card => { this.hand.push(card) },
      null, // no error handling
      () => { this.isDisabled = false})

  }

  ngOnInit() {
    this._deck.LoadDeck().subscribe((cards) => {
      this._deck.shuffle()
      this.loaded = true
    })
  }

}

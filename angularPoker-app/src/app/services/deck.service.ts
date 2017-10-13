import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core'

import { ArrayUtil } from '../util/array.util'
import { Card,
         Suit,
         Pip } from '../models/card'

@Injectable()
export class DeckService {
  private deck: Card[] = []

  private dealer: Observable<Card>

  constructor() {
    const randomGenerator = function* (min, max) {
      while (true) {
        yield Math.random() * (max - min) + min
      }
    }
    const suits = Observable.range(0, 4)
    const cards = Observable.range(0, 13)
    suits.subscribe(suit => cards.subscribe(rank => this.deck.push({suit, rank, image: `/assets/${rank}_of_${Suit[suit]}`}) ))
    this.dealer = Observable.from(this.deck)
  }

  public LoadDeck(): Observable<void> {
   return null
  }

  public shuffle(): void {
     this.deck = ArrayUtil.shuffleInPlace(this.deck)
  }

  public deal(count: number): Observable<Card> {
    return this.dealer.take(count)
  }

  private printCard(x: Card) {
     console.log(`Dealing: ${Pip[x.rank]} of ${Suit[x.suit]}`)
  }
}

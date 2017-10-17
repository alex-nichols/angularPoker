import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ArrayUtil } from '../util/array.util'
import { Card,
         Suit,
         Pip } from '../models/card'

@Injectable()
export class DeckService {
  private deck: Card[] = []
  private deckIdx = 0

  constructor(private _http: HttpClient) {

  }

  private logCardCombinations(): void {
    const suits = Observable.range(0, 4)
    const cards = Observable.range(0, 13)
    suits.subscribe(suit => cards.subscribe(
      rank => this.deck.push({suit, rank, image: `/assets/${rank + 1}_of_${Suit[suit]}`}) )
    )
  }

  public LoadDeck(): Observable<Card[]> {
   return this._http.get<Card[]>('/assets/cards/list.json')
                    .do
                    (cards => this.deck = cards)
  }

  public shuffle(): void {
     this.deck = ArrayUtil.shuffleInPlace(this.deck)
     this.deckIdx = 0
  }

  public deal(count: number = 1): Observable<Card> {
    return Observable.from(this.dealCard(count) as any)
  }

  private *dealCard(count: number): IterableIterator<Card> {

    for (let i = 0; i < count; ++i) {
      yield this.deck[this.deckIdx]

      this.deckIdx = (this.deckIdx + 1) % this.deck.length

      if (this.deckIdx === 0) {
        this.shuffle()
      }
    }
  }

  private printCard(x: Card) {
     console.log(`Dealing: ${Pip[x.rank]} of ${Suit[x.suit]}`)
  }
}

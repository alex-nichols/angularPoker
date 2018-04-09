import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { ArrayUtil } from '../../util/array.util'
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
    const suits$ = Observable.of(...Object.keys(Suit))
    const cards$ = Observable.of(...Object.keys(Pip))

    // const suits = Observable.range(0, 4)
    // const cards = Observable.range(0, 13)
    suits$.subscribe(suit => cards$.subscribe(
      rank => this.deck.push({suit: Suit[suit], rank: Pip[rank], image: `/assets/${rank + 1}_of_${Suit[suit]}`}) )
    )
  }

  public LoadDeck(): Observable<Card[]> {

    if (this.deck.length > 0) {
      return Observable.of(this.deck)
    }

    return this._http.get<Card[]>('/assets/cards/list.json')
                     .do(cards => {
                       this.deck = this.shuffle(cards)
                      })
  }

  public shuffle(deck: Card[]): Card[] {
     let deckCopy = deck.slice()
     deckCopy = ArrayUtil.shuffleInPlace(deckCopy)
     this.deckIdx = 0
     return deckCopy
  }

  public deal(count: number = 1): Observable<Card[]> {
    // return Observable.from(this.dealCard(count) as any)
    const cards = Array.from(this.dealCard(count))
    return Observable.of(cards)
            // .bufferWhen(() => Observable.interval(90000)) as Observable<Card[]>
  }

  // private dealCards(count: number): Observable<Card[]>

  private *dealCard(count: number): IterableIterator<Card> {

    for (let i = 0; i < count; ++i) {
      yield this.deck[this.deckIdx]

      this.deckIdx = (this.deckIdx + 1) % this.deck.length

      if (this.deckIdx === 0) {
        this.deck = this.shuffle(this.deck)
      }
    }
  }

  private printCard(x: Card) {
     console.log(`Dealing: ${Pip[x.rank]} of ${Suit[x.suit]}`)
  }
}

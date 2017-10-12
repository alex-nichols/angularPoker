import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core'

import { Card,
         Suit,
         Pips } from '../models/card'

@Injectable()
export class DeckService {
  private deck: Card[]

  constructor() {

    const suits = Observable.range(0, 4)
    const cards = Observable.range(1, 13)
    suits.subscribe(suit => cards.subscribe(pips => console.log(`suit: ${Suit[suit]} pips: ${Pips[pips]}`)))
   }
}

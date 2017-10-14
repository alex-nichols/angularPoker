import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable'


import { Card } from '../../models/card'
import { DeckService } from '../../services/deck.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public hand: Card[] = []
  public loaded: Boolean = false
  
  constructor(private _deck: DeckService) {
    
      //.subscribe(() => this.hand = _deck.deal(100).toArray())
    //_deck.deal(100).toArray().subscribe(x => console.log(JSON.stringify(x)))
  }

  public deal(count:number = 5) {
    this._deck.deal(count).subscribe(card => {
      this.hand.push(card)
    })
  }

  ngOnInit() {
    this._deck.LoadDeck().subscribe((cards) => {
      this._deck.shuffle()
      this.loaded = true
    })
  }

}

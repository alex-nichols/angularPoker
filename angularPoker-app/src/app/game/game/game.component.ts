import { Component, OnInit } from '@angular/core';
import { DeckService } from '../../services/deck.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private _deck: DeckService) {
    _deck.deal(100).toArray().subscribe(x => console.log(JSON.stringify(x)))
  }

  ngOnInit() {
  }

}

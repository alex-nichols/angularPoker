import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../../../deck/models/card';

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.scss']
})
export class PlayerHandComponent implements OnInit {
  @Input() playerHand: Card[]
  @Input() playerId: string
  @Input() disabled = false

  @Output() cardClicked = new EventEmitter<Card>()

  constructor() { }

  ngOnInit() {
  }

  private onCardClicked(card: Card): void {
    this.cardClicked.emit(card)
  }
}

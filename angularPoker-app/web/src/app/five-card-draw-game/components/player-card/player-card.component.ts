import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PlayerCard } from '../../models/player.card';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  @Input() public card: PlayerCard
  @Input() public disabled: boolean
  @Output() public cardClicked = new EventEmitter<PlayerCard>()

  constructor() { }

  ngOnInit() {
  }

  private onCardClicked(card: PlayerCard): void {
    if (!this.disabled) {
      this.cardClicked.emit(card)
    }
  }



}

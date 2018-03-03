import { Component, OnInit, Input } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-animated-card',
  templateUrl: './animated.card.component.html',
  styleUrls: ['./animated.card.component.css'],
  animations: [
    trigger('slideIn', [
      state('in', style({
        transform: 'translate(0, 0)',
        opacity: 1
      })),
      transition('void => *', [
        style({
          transform: 'translate(-400%, -200%)',
          opacity: '0'
        }),
        animate('750ms 0s ease-out')
      ])
    ])
  ]
})
export class AnimatedCardComponent extends CardComponent {

  public slideInDone() {
    this.isFaceUp = true
  }

}

import { Component, OnInit, Input } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
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
export class CardComponent implements OnInit {
  @Input() public frontImgUrl: string
  @Input() public backImgUrl: string
  @Input() public name: string

  public isFaceUp = false;

  constructor() { }

  ngOnInit() {
  }

  public slideInDone() {
    this.isFaceUp = true
  }

}

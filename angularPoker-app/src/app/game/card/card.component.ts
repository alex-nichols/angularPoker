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
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('100ms 0s ease-out')
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

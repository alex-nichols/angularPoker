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
  styleUrls: ['./card.component.scss'],
  animations: [ ]
})
export class CardComponent implements OnInit {
  @Input() public frontImgUrl: string
  @Input() public backImgUrl: string
  @Input() public name: string

  public isFaceUp = false

  constructor() { }

  ngOnInit() {
    this.isFaceUp = true
  }

  public slideInDone() {
    this.isFaceUp = true
  }

}

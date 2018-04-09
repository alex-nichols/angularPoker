import { Component, OnInit, Input } from '@angular/core';
import { Paytable } from '../../models/paytable';
import { HandTypes } from '../../models/hand.types';

@Component({
  selector: 'app-paytable',
  templateUrl: './paytable.component.html',
  styleUrls: ['./paytable.component.scss']
})
export class PaytableComponent implements OnInit {
  @Input() paytable: Paytable
  @Input() multiplier: number
  @Input() handValue: HandTypes

  constructor() { }

  ngOnInit() {
  }

}

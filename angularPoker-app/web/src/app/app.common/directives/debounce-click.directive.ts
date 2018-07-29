
import {debounceTime} from 'rxjs/operators';
import { Directive, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs'


@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit {
  @Output() debounceClick = new EventEmitter()
  private clicks = new Subject()

  constructor() { }

  ngOnInit() {
    this.clicks.pipe(debounceTime(500))
      .subscribe(e => this.debounceClick.emit(e))
  }

  @HostListener('click', ['$event'])
  public clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();

  }
}

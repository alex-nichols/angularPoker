import { Directive, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/Subject'
import 'rxjs/add/operator/debounceTime';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit {
  @Output() debounceClick = new EventEmitter()
  private clicks = new Subject()

  constructor() { }

  ngOnInit() {
    this.clicks.debounceTime(500)
      .subscribe(e => this.debounceClick.emit(e))
  }

  @HostListener('click', ['$event'])
  public clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();

  }
}

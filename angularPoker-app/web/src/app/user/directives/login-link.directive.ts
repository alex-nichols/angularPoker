import { Directive, ElementRef, HostListener } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State as UserState, selectIsLoggedIn } from '../store/user.reducer';
import { LogInUser } from '../store/user.actions';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appLoginLink]'
})
export class LoginLinkDirective {
  isUserLoggedIn$: Observable<boolean>;

  @HostListener('click') click() {
    this.store.dispatch(new LogInUser());
  }

  constructor(private store: Store<UserState> ) {
    this.isUserLoggedIn$ = store.pipe(select(selectIsLoggedIn))
   }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as UserState, selectUser, selectFeature } from '../../../user/store/user.reducer'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$: Observable<any>;

  constructor(private userStore: Store<UserState>) {
    this.user$ = userStore.select(selectUser)
      .pipe(tap(u => console.log(u)))
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as UserState, selectUserProfile, selectUserState } from '../../../user/store/reducers/user.reducer'
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
    this.user$ = userStore.select(selectUserProfile)
      .pipe(tap(u => console.log(u)))
  }

  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserRoutingModule } from './user-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/user.reducer';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularFireAuthModule,
    StoreModule.forFeature('user', reducer)
  ],
  declarations: []
})
export class UserModule { }

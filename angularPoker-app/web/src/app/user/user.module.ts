import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserRoutingModule } from './user-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer, featureName } from './store/user.reducer';
import { LoginLinkDirective } from './directives/login-link.directive';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';
import { LoginLinkComponent } from './containers/login-link/login-link.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    AngularFireAuthModule,
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [LoginLinkDirective, LoginLinkComponent],
  exports: [LoginLinkDirective, LoginLinkComponent]
})
export class UserModule { }

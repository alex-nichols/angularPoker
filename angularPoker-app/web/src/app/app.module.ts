import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component'
import { reducers } from './reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppSiteModule } from './app-site/app-site.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PaytableModule } from './paytable/paytable.module';
import { UserModule } from './user/user.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'AngularPoker'),
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    AppRoutingModule,
    AppSiteModule,
    PaytableModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }

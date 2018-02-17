import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppComponent } from './app.component'
import { CommonUiModule } from './common-ui/common-ui.module';
import { TestGameModule } from './test-game/test-game.module';
import { reducers } from './reducers';
import { DeckModule } from './deck/deck.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    CommonUiModule,
    TestGameModule, 
    DeckModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

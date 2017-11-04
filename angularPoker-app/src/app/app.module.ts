import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { store, effects } from './store/store'

import { DeckService } from './services/deck.service'
import { GameService } from './services/game.service'

import { AppComponent } from './app.component'
import { GameComponent } from './game/game/game.component'
import { CardComponent } from './game/card/card.component'
import { DebounceClickDirective } from './directives/debounce-click.directive'

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CardComponent,
    DebounceClickDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(store),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [
    GameService,
    DeckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

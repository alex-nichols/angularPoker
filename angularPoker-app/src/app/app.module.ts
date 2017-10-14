import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'

import { DeckService } from './services/deck.service'
import { GameService } from './services/game.service'

import { AppComponent } from './app.component'
import { GameComponent } from './game/game/game.component'

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GameService,
    DeckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { DeckService } from './services/deck.service'
import { GameService } from './services/game.service'

import { AppComponent } from './app.component'
import { GameComponent } from './game/game/game.component';
import { CardComponent } from './game/card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    GameService,
    DeckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

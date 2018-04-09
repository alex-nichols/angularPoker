import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameScreenComponent } from './containers/game-screen/game-screen.component';
import { StoreModule } from '@ngrx/store';
import { reducer, featureName } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './effects';
import { DeckModule } from '../deck/deck.module';
import { FiveCardDrawGameRoutingModule } from './five-card-draw-game-routing.module';
import { DeckService } from '../deck/services/deck.service';
import { GameService } from './services/game';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerHandComponent } from './components/player-hand/player-hand.component';
import { HandTypeNamePipe } from './directives/hand-type-name.pipe';


@NgModule({
  imports: [
    DeckModule,
    CommonModule,
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([GameEffects]),
    FiveCardDrawGameRoutingModule
  ],
  exports: [
    GameScreenComponent
  ],
  declarations: [
    GameScreenComponent,
    PlayerHandComponent,
    PlayerCardComponent,
    HandTypeNamePipe
  ],
  providers: [
    DeckService,
    GameService
  ]
})
export class FiveCardDrawGameModule { }

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

@NgModule({
  imports: [
    DeckModule,
    CommonModule,
    StoreModule.forFeature(featureName, reducer),
    EffectsModule.forFeature([GameEffects]),
  //  FiveCardDrawGameRoutingModule
  ],
  exports: [
    GameScreenComponent
  ],
  declarations: [
    GameScreenComponent
  ],
  providers: [
    DeckService,
    GameService
  ]
})
export class FiveCardDrawGameModule { }

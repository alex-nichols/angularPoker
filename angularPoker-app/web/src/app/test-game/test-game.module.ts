import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { DeckModule } from '../deck/deck.module';
import { TestGameRoutingModule } from './test-game-routing.module';
import { GameEffects } from './effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as reducers from './reducers';

@NgModule({
  imports: [
    CommonModule,
    DeckModule,
    StoreModule.forFeature(reducers.featureName, reducers.reducer),
    EffectsModule.forFeature([GameEffects])
  ],
  declarations: [
    GameComponent
  ],
  exports: [
    GameComponent
  ]
})
export class TestGameModule { }

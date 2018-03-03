import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckService } from './services/deck.service';
import { StoreModule } from '@ngrx/store';
import * as reducers from './reducers'
import { EffectsModule } from '@ngrx/effects';
import { DeckEffects } from './effects';
import { CardComponent } from './components/card/card.component';
import { AnimatedCardComponent } from './components/animated.card/animated.card.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(reducers.featureName, reducers.reducer),
    EffectsModule.forFeature([DeckEffects])
  ],
  declarations: [
    AnimatedCardComponent,
    CardComponent
  ],
  exports: [
    AnimatedCardComponent,
    CardComponent
  ],
  providers: [
    DeckService
  ]
})
export class DeckModule { }

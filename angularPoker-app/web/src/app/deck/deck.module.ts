import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DeckService } from './services/deck.service';
import { StoreModule } from '@ngrx/store';
import * as reducers from './reducers'
import { EffectsModule } from '@ngrx/effects';
import { DeckEffects } from './effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(reducers.featureName, reducers.reducer),
    EffectsModule.forFeature([DeckEffects])
  ],
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  providers: [
    DeckService
  ]
})
export class DeckModule { }

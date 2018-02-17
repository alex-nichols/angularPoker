import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DeckService } from './services/deck.service';
import { StoreModule } from '@ngrx/store';
import { effects } from './store/store';
import * as deckReducers from './store/deck.reducer'
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(deckReducers.featureName, deckReducers.reducer),
    EffectsModule.forFeature(effects)
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
export class CardComponentsModule { }

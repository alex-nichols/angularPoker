import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DeckService } from './services/deck.service';
import { StoreModule } from '@ngrx/store';
import { store, effects, featureName } from './store/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, store),
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

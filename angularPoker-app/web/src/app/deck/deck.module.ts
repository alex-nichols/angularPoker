import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckService } from './services/deck.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CardComponent } from './components/card/card.component';
import { AnimatedCardComponent } from './components/animated.card/animated.card.component';

@NgModule({
  imports: [
    CommonModule,

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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DeckService } from './services/deck.service';

@NgModule({
  imports: [
    CommonModule
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

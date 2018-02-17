import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { DeckModule } from '../deck/deck.module';

@NgModule({
  imports: [
    CommonModule,
    DeckModule
  ],
  declarations: [
    GameComponent
  ],
  exports: [
    GameComponent
  ]
})
export class TestGameModule { }

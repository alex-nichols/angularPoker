import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { DeckModule } from '../deck/deck.module';
import { TestGameRoutingModule } from './test-game-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DeckModule,
   // TestGameRoutingModule
  ],
  declarations: [
    GameComponent
  ],
  exports: [
    GameComponent
  ]
})
export class TestGameModule { }

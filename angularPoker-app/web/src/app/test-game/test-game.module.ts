import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { CardComponentsModule } from '../card-components/card-components.module';

@NgModule({
  imports: [
    CommonModule,
    CardComponentsModule
  ],
  declarations: [
    GameComponent
  ],
  exports: [
    GameComponent
  ]
})
export class TestGameModule { }

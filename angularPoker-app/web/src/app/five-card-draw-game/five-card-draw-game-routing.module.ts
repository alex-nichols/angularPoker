import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameScreenComponent } from './containers/game-screen/game-screen.component';

const routes: Routes = [
  {
    path: '',
    component: GameScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiveCardDrawGameRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './test-game/game/game.component';
import { GameScreenComponent } from './five-card-draw-game/containers/game-screen/game-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/five-card', pathMatch: 'full' },
  { path: 'five-card', component: GameScreenComponent },
  { path: 'test-app', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

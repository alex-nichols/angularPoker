import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './test-game/game/game.component';
import { GameScreenComponent } from './five-card-draw-game/containers/game-screen/game-screen.component';
import { DashboardComponent } from './app-site/containers/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/five-card', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'five-card', component: GameScreenComponent },
    { path: 'test-app', component: GameComponent },  
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

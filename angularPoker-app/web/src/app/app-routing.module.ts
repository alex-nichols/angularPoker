import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './app-site/containers/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/five-card', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, children: [
    { path: 'test-app', loadChildren: "./test-game/test-game.module#TestGameModule" },
    { path: 'five-card', loadChildren: "./five-card-draw-game/five-card-draw-game.module#FiveCardDrawGameModule" },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

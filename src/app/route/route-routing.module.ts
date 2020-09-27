import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmingameComponent } from '../admingame/admingame.component';
import { GameComponent } from '../game/game.component';


const routes: Routes = [
  { path: '', component: AdmingameComponent },
  { path: 'game', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }

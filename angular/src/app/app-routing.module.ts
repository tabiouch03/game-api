import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { GameDetailsComponent } from './game/game-details/game-details.component';
import { GameFormComponent } from './game/game-form/game-form.component';
import { GameDeleteComponent } from './game/game-delete/game-delete.component';


const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'add', component: GameFormComponent },
  { path: 'games', component: GameComponent },
  { path: 'games/:id', component: GameDetailsComponent },
  { path: 'delete/:id', component: GameDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

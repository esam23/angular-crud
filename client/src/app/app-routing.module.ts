import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/players',
    pathMatch: 'full'
  },
  {
    path:'players',
    component: PlayerListComponent
  },
  {
   path:'players/add',
   component: PlayerFormComponent
  }, 
  {
    path: 'players/edit/:id',
    component:  PlayerFormComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuessComponent } from './guess/guess.component';
import { NewGameComponent } from './new-game/new-game.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'newGame', pathMatch: 'full' },
    { path: 'guess', component: GuessComponent },
    { path: 'newGame', component: NewGameComponent}    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }
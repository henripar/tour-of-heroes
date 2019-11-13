// Tiedosto, joka määrittää "reitityksen" eli mihin näkymiin (view) linkit johtavat.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // uudelleenohjaa reitin joka matchaa tyhjän pathin kanssa dashboard näkymään.
  { path: 'heroes', component: HeroesComponent }, // Path: url osoitteen "sijainti",
  // component: komponentti, joka näytetään tässä sijainnissa.
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
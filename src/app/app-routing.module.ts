import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, data: { animation: 'home' } },
  { path: 'movies', loadChildren: '../app/movies/movies.module#MoviesModule' },
  { path: 'login', loadChildren: '../app/login/login.module#LoginModule' },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

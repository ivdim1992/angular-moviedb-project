import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { TopRatedMoviesComponent } from './shared/components/top-rated-movies/top-rated-movies.component';
import { PopularMoviesComponent } from './shared/components/popular-movies/popular-movies.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', loadChildren: '../app/shared/shared.module#SharedModule' },
  { path: 'login', loadChildren: '../app/login/login.module#LoginModule' },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

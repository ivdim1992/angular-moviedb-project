import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards';
import { TopRatedMoviesComponent, PopularMoviesComponent, SearchMoviesComponent } from './components';

const routes: Routes = [
  {
    path: 'top-rated-movies',
    component: TopRatedMoviesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'popular-movies',
    component: PopularMoviesComponent,
    canActivate: [AuthGuard],
    data: { animation: PopularMoviesComponent }
  },
  {
    path: 'search',
    component: SearchMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}

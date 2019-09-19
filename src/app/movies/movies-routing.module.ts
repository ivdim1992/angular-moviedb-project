import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards';
import {
  TopRatedMoviesComponent,
  PopularMoviesComponent,
  SearchMoviesComponent,
  MovieDetailsComponent,
  MyListComponent
} from './components';

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
    path: 'my-list',
    component: MyListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: SearchMoviesComponent
  },
  {
    path: ':id',
    component: MovieDetailsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}

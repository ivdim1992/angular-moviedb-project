import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';

const routes: Routes = [
  { path: 'top-rated-movies', component: TopRatedMoviesComponent },
  { path: 'popular-movies', component: PopularMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}

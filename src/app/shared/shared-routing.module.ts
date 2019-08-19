import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'top-rated-movies', component: TopRatedMoviesComponent, canActivate: [AuthGuard] },
  { path: 'popular-movies', component: PopularMoviesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}

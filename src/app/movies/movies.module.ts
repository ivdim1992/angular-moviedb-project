import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';

import * as components from './components';
import * as services from './shared/services';

@NgModule({
  declarations: [
    components.MoviesComponent,
    components.PopularMoviesComponent,
    components.TopRatedMoviesComponent,
    components.MovieDetailsComponent,
    components.SearchMoviesComponent
  ],
  imports: [MoviesRoutingModule, CommonModule, RouterModule, SharedModule],
  exports: [components.MoviesComponent],
  providers: [services.MovieService],
  entryComponents: [components.MovieDetailsComponent]
})
export class MoviesModule {}

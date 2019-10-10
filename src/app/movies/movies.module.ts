import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import * as components from './components';

@NgModule({
  declarations: [
    components.MoviesComponent,
    components.PopularMoviesComponent,
    components.TopRatedMoviesComponent,
    components.SearchMoviesComponent,
    components.MyListComponent,
    components.MovieDetailsModalComponent,
    components.MovieDetailsComponent
  ],
  imports: [MoviesRoutingModule, SharedModule, InfiniteScrollModule],
  exports: [components.MoviesComponent],
  providers: [],
  entryComponents: [components.MovieDetailsModalComponent]
})
export class MoviesModule {}

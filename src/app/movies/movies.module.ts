import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StoreModule } from '@ngrx/store';

import * as components from './components';
import * as fromMovieReducer from './store/movies.reducer';
import * as fromMoviesEffects from './store/movies.effects';

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
  imports: [
    MoviesRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    StoreModule.forFeature('movies', fromMovieReducer.movieReducer),
    EffectsModule.forFeature([fromMoviesEffects.MoviesEffects])
  ],
  exports: [components.MoviesComponent],
  providers: [],
  entryComponents: [components.MovieDetailsModalComponent]
})
export class MoviesModule {}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/shared/models';
import * as fromMoviesActions from '../../store/movies.actions';
import * as moviesSelector from '../../store/movies.selectors';
import * as fromAppStore from '../../../store/store.reducer';
import { MovieState } from '../../store/movies.reducer';

@Component({
  selector: 'moviedb-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private _store: Store<fromAppStore.AppState>) { }

  popularMovies$: Observable<Movie[]> = this._store.select(moviesSelector.seleselectPop);

  topRatedMovies$: Observable<Movie[]> = this._store.select(moviesSelector.selectTopRatedMovies);

  ngOnInit() {
    this._store.dispatch(new fromMoviesActions.GetPopularMovies(1));
    this._store.dispatch(new fromMoviesActions.GetTopRatedMovies(1));

  }
}

import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { MovieState } from 'src/app/core/store/reducers/movie.reducers';
import { LoadPopularMovies, LoadTopRatedMovies } from 'src/app/core/store/actions/movie.actions';
import { selectPopularMovies, selectTopRatedMovies } from 'src/app/core/store/index';
import { Movie } from 'src/app/shared/models';
import { share, takeUntil, map } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services';

@Component({
  selector: 'moviedb-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private _store: Store<MovieState>, private _userService: UserService) {}

  listAnimation: boolean = false;
  topRatedMovies$: Observable<Movie[]> = this._store.select(selectTopRatedMovies);
  popularMovies$: Observable<Movie[]> = this._store.select(selectPopularMovies);
  favoriteMoviesIDs: number[] = [];
  isLogged: string = localStorage.getItem('isLogged');
  private _destroy$ = new Subject<boolean>();

  ngOnInit() {
    this._store.dispatch(new LoadTopRatedMovies());
    this._store.dispatch(new LoadPopularMovies());

    if (this.isLogged) {
      this._userService
        .getFavoriteMovies()
        .pipe(takeUntil(this._destroy$))
        .subscribe(movies => {
          movies.map(movie => this.favoriteMoviesIDs.push(movie.id));
        });
    }
  }
}

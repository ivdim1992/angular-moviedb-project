import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import { LoadTopRatedMovies } from 'src/app/core/store/actions/movie.actions';
import { selectTopRatedMovies } from 'src/app/core/store/index';
import { MovieState } from 'src/app/core/store/reducers/movie.reducers';
import { UserService } from 'src/app/shared/services';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'moviedb-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {
  constructor(private _store: Store<MovieState>, private _userService: UserService) {}

  topRatedMovies$: Observable<Movie[]> = this._store.select(selectTopRatedMovies);
  isLogged: string = localStorage.getItem('isLogged');
  private _destroy$ = new Subject<boolean>();
  favoriteMoviesIDs: number[] = [];

  ngOnInit() {
    this._store.dispatch(new LoadTopRatedMovies());

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

import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from 'src/app/shared/models';
import { LoadPopularMovies } from 'src/app/core/store/actions/movie.actions';
import { selectPopularMovies } from 'src/app/core/store/index';
import { Store } from '@ngrx/store';
import { MovieState } from 'src/app/core/store/reducers/movie.reducers';
import { UserService } from 'src/app/shared/services';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'moviedb-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  constructor(private _store: Store<MovieState>, private _userService: UserService) {}

  popularMovies$: Observable<Movie[]> = this._store.select(selectPopularMovies);
  isLogged: string = localStorage.getItem('isLogged');
  private _destroy$ = new Subject<boolean>();
  favoriteMoviesIDs: number[] = [];

  ngOnInit() {
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

import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models';
import { MovieService } from '../../shared/services';
import { AuthService, UserService } from 'src/app/shared/services';

@Component({
  selector: 'moviedb-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(
    private _movieService: MovieService,
    private _authService: AuthService,
    private _userService: UserService
  ) {}

  listAnimation: boolean = false;
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  favoriteMoviesIDs: number[] = [];
  private destroy$ = new Subject<boolean>();

  ngOnInit() {
    this._movieService
      .getPopularMovies()
      .pipe(takeUntil(this.destroy$))
      .subscribe(movies => {
        this.popularMovies = movies.slice(0, 5);
      });

    this._movieService
      .getTopRatedMovies()
      .pipe(takeUntil(this.destroy$))
      .subscribe(movies => {
        this.topRatedMovies = movies.slice(0, 5);
      });

    if (this._userService.currentUser) {
      this._userService
        .getFavoriteMovies()
        .pipe(takeUntil(this.destroy$))
        .subscribe(movies => {
          movies.map(movie => {
            this.favoriteMoviesIDs.push(movie.id);
          });
        });
    }
  }
}

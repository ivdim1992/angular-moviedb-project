import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from 'src/app/shared/models';
import { MovieService } from '../../shared/services';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'moviedb-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {
  constructor(private _movieService: MovieService) {}

  private destroy$ = new Subject<boolean>();
  favoriteMoviesIDs: number[] = [];
  topRatedMovies: Movie[];

  ngOnInit() {
    this._movieService
      .getTopRatedMovies()
      .pipe(takeUntil(this.destroy$))
      .subscribe(movies => {
        this.topRatedMovies = movies;
      });

    // this._movieService
    //   .getFavoriteMovies()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(movies => {
    //     movies.map(movie => {
    //       this.favoriteMoviesIDs.push(movie.id);
    //     });
    //   });
  }
}

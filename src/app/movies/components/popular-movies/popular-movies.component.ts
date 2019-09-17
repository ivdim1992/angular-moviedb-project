import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Movie } from 'src/app/shared/models';
import { MovieService } from '../../shared/services';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'moviedb-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  constructor(private _movieService: MovieService) {}
  private destroy$ = new Subject<boolean>();

  popularMovies: Movie[];
  favoriteMoviesIDs: number[] = [];

  ngOnInit() {
    this._movieService
      .getPopularMovies()
      .pipe(takeUntil(this.destroy$))
      .subscribe(movies => {
        this.popularMovies = movies;
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

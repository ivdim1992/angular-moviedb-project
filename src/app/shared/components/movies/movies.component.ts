import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'moviedb-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private _movieService: MovieService) {}

  popularMovies$: Observable<Array<Movie>>;
  topRatedMovies$: Observable<Array<Movie>>;

  ngOnInit() {
    this._movieService.getKey().subscribe();
    this.popularMovies$ = this._movieService
      .getPopularMovies()
      .pipe(map(movies => movies.slice(0, 5)));
    // this.topRatedMovies$ = this._movieService
    //   .getTopRatedMovies()
    //   .pipe(map(movies => movies.slice(0, 5)));
  }
}

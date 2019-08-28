import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models';
import { MovieService } from '../../shared/services';

@Component({
  selector: 'moviedb-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private _movieService: MovieService) {}

  listAnimation: boolean = false;
  popularMovies$: Observable<Array<Movie>>;
  topRatedMovies$: Observable<Array<Movie>>;

  ngOnInit() {
    this.popularMovies$ = this._movieService.getPopularMovies().pipe(map(movies => movies.slice(2, 7)));
    this.topRatedMovies$ = this._movieService.getTopRatedMovies().pipe(map(movies => movies.slice(2, 7)));
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models';
import { MovieService } from '../../shared/services';

@Component({
  selector: 'moviedb-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {
  constructor(private _moviesService: MovieService) {}

  topRatedMovies$: Observable<Array<Movie>>;

  ngOnInit() {
    this.topRatedMovies$ = this._moviesService.getTopRatedMovies();
  }
}

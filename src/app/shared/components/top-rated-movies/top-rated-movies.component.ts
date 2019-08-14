import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { Observable } from 'rxjs';

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

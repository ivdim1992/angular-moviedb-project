import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'moviedb-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  constructor(private _movieService: MovieService) {}

  popularMovies$: Observable<Array<Movie>>;

  ngOnInit() {
    this.popularMovies$ = this._movieService.getPopularMovies();
  }
}

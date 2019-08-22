import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models';
import { MovieService } from '../../shared/services';

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

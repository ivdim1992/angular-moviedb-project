import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services';
import { Movie } from 'src/app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'moviedb-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {
  constructor(private _movieService: MovieService, private _route: ActivatedRoute) {}

  query: string;
  searchedMovies$: Observable<Movie[]>;
  ngOnInit() {
    // this.query = this._route.snapshot.queryParams['search'];
    this._route.queryParams.subscribe(params => {
      this.query = params['search'];
      this.searchedMovies$ = this._movieService.searchMovie(this.query);
    });
  }
}

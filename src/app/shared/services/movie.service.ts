import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndPoints } from '../enums';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Movie, IMovieInput } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private _http: HttpClient) {}

  getPopularMovies(): Observable<Movie[]> {
    const url =
      EndPoints.BASE_URL +
      'popular?api_key=' +
      EndPoints.API_KEY +
      '&language=en-US&page=1';

    return this._http
      .get<Array<IMovieInput>>(url)
      .pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }

  getTopRatedMovies(): Observable<Movie[]> {
    const url =
      EndPoints.BASE_URL +
      'top_rated?api_key=' +
      EndPoints.API_KEY +
      '&language=en-US&page=1';

    return this._http
      .get<Array<IMovieInput>>(url)
      .pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }
}

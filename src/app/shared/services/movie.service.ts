import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { movieDB } from '../enums/urls.enums';
import { Movie, IMovieInput } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private _http: HttpClient) {}

  getKey(): Observable<string> {
    const url = movieDB.APP_KEY;
    return this._http
      .get<string>(
        'https://moviedb-217e9.firebaseio.com/messages/-Llm9M-NG0VFKCq5tYGL/.json'
      )
      .pipe(tap(data => data['text']));
  }

  getPopularMovies(): Observable<Movie[]> {
    const url =
      movieDB.BASE_URL +
      'popular?api_key=' +
      this.getKey() +
      '&language=en-US&page=1';

    return this._http
      .get<Array<IMovieInput>>(url)
      .pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }

  //   getTopRatedMovies(): Observable<Movie[]> {
  //     const url =
  //       movieDB.BASE_URL +
  //       'top_rated?api_key=' +
  //       this.getKey() +
  //       '&language=en-US&page=1';

  //     return this._http
  //       .get<Array<IMovieInput>>(url)
  //       .pipe(map(input => input['results'].map(movies => new Movie(movies))));
  //   }
}

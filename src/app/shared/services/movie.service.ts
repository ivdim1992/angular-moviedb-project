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

  getPopularMovies(): Observable<Movie[]> {
    const url = `${movieDB.BASE_URL}popular?api_key=${movieDB.APP_KEY}&language=en-US&page=1`;
    return this._http
      .get<Array<IMovieInput>>(url)
      .pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }

  getTopRatedMovies(): Observable<Movie[]> {
    const url = `${movieDB.BASE_URL}top_rated?api_key=${movieDB.APP_KEY}&language=en-US&page=1`;
    return this._http
      .get<Array<IMovieInput>>(url)
      .pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }

  getGenres(): Observable<Array<any>> {
    const url = `${movieDB.GENRES_URL}list?api_key=${movieDB.APP_KEY}&language=en-US`;
    return this._http.get<Array<any>>(url).pipe(map(genres => genres));
  }

  getDetails(movieID: number): Observable<any> {
    const url = `${movieDB.BASE_URL}${movieID}?api_key=${movieDB.APP_KEY}&language=en-US`;
    return this._http.get<any>(url);
  }
}

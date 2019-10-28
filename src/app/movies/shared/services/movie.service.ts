import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, IMovieInput, MovieDetails, IMovieDetails } from 'src/app/shared/models';
import { appConfig, IAppConfig } from 'src/app/app.config';
import { APP_CONFIG } from 'src/app/injection-token';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private _http: HttpClient, @Inject(APP_CONFIG) public _appConfig: IAppConfig) {}

  getPopularMovies(page): Observable<Movie[]> {
    const url = `${appConfig.BASE_URL}movie/popular?page=${page}`;
    return this._http
      .get<Array<IMovieInput>>(url)
      .pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }

  getTopRatedMovies(page): Observable<Movie[]> {
    const url = `${appConfig.BASE_URL}movie/top_rated?page=${page}`;
    return this._http
      .get<Array<IMovieInput>>(url)
      .pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }

  getMovieDetails(movieID: number): Observable<MovieDetails> {
    const url = `${appConfig.BASE_URL}movie/${movieID}?`;
    return this._http.get<IMovieDetails>(url).pipe(map(movie => new MovieDetails(movie)));
  }

  searchMovie(query: string): Observable<Movie[]> {
    const url = `${appConfig.BASE_URL}search/movie?&query=${query}`;
    return this._http.get<Movie[]>(url).pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }
}

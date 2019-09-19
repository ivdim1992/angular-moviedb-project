import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, IMovieInput, MovieDetails, IMovieDetails } from 'src/app/shared/models';
import { MOVIEDB } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private _http: HttpClient) {}

  getPopularMovies(): Observable<Movie[]> {
    const url = `${MOVIEDB.BASE_URL}movie/popular?`;
    return this._http
      .get<Array<IMovieInput>>(url)
      .pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }

  getTopRatedMovies(): Observable<Movie[]> {
    const url = `${MOVIEDB.BASE_URL}movie/top_rated?`;
    return this._http
      .get<Array<IMovieInput>>(url)
      .pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }

  getGenres(): Observable<Array<any>> {
    const url = `${MOVIEDB.BASE_URL}genre/list?`;
    return this._http.get<Array<any>>(url).pipe(map(genres => genres));
  }

  getMovieDetails(movieID: string): Observable<MovieDetails> {
    const url = `${MOVIEDB.BASE_URL}movie/${movieID}?`;
    return this._http.get<IMovieDetails>(url).pipe(map(movie => new MovieDetails(movie)));
  }

  searchMovie(query: string): Observable<Array<Movie>> {
    const url = `${MOVIEDB.BASE_URL}search/movie?&query=${query}`;
    return this._http.get<Array<Movie>>(url).pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }
}

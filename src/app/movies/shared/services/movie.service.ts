import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { movieDB } from '../../../shared/enums/urls.enums';
import { Movie, IMovieInput, MovieDetails, IMovieDetails } from 'src/app/shared/models';

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

  getMovieDetails(movieID: number): Observable<MovieDetails> {
    const url = `${movieDB.BASE_URL}${movieID}?api_key=${movieDB.APP_KEY}&language=en-US`;
    return this._http.get<IMovieDetails>(url).pipe(map(movie => new MovieDetails(movie)));
  }

  searchMovie(query: string): Observable<Array<Movie>> {
    const url = `${movieDB.SEARCH_URL}movie?api_key=${movieDB.APP_KEY}&query=${query}`;
    return this._http.get<Array<Movie>>(url).pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }
}

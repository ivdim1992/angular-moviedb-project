import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { Movie, IMovieInput, MovieDetails, IMovieDetails } from 'src/app/shared/models';
import { MOVIEDB } from 'src/app/app.config';
import { AuthService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private _http: HttpClient, private _authService: AuthService) {}

  getPopularMovies(): Observable<Movie[]> {
    const url = `${MOVIEDB.BASE_URL}movie/popular?api_key=&language=en-US&page=1`;
    return this._http
      .get<Array<IMovieInput>>(url)
      .pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }

  getTopRatedMovies(): Observable<Movie[]> {
    const url = `${MOVIEDB.BASE_URL}movie/top_rated?api_key=&language=en-US&page=1`;
    return this._http
      .get<Array<IMovieInput>>(url)
      .pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }

  getGenres(): Observable<Array<any>> {
    const url = `${MOVIEDB.BASE_URL}genre/list?api_key=&language=en-US`;
    return this._http.get<Array<any>>(url).pipe(map(genres => genres));
  }

  getMovieDetails(movieID: number): Observable<MovieDetails> {
    const url = `${MOVIEDB.BASE_URL}movie/${movieID}?api_key=${MOVIEDB.APP_KEY}&language=en-US`;
    return this._http.get<IMovieDetails>(url).pipe(map(movie => new MovieDetails(movie)));
  }

  searchMovie(query: string): Observable<Array<Movie>> {
    const url = `${MOVIEDB.BASE_URL}search/movie?api_key=&query=${query}`;
    return this._http.get<Array<Movie>>(url).pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }

  getUserIdAndMarkAsFavorite(movieID) {
    let session = this._authService.getSessionLocalstore();
    const url = `https://api.themoviedb.org/3/account?api_key=${MOVIEDB.APP_KEY}&session_id=${session}`;
    return this._http.get(url).pipe(
      switchMap(user => {
        let user_id = user['id'];
        const body = { media_type: 'movie', media_id: movieID, favorite: true };
        const url = `${MOVIEDB.BASE_URL}account/${user_id}/favorite?api_key=${MOVIEDB.APP_KEY}&session_id=${session}`;
        return this._http.post(url, body);
      })
    );
  }

  getFavoriteMovies(): Observable<any> {
    const session = this._authService.getSessionLocalstore();
    const url = `${MOVIEDB.BASE_URL}account/{account_id}/favorite/movies?api_key=${MOVIEDB.APP_KEY}&session_id=${session}&language=en-US&sort_by=created_at.asc&page=1`;
    return this._http.get<Array<Movie>>(url).pipe(map(input => input['results'].map(movies => new Movie(movies))));
  }
}

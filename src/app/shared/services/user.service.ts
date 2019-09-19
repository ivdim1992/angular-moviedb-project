import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { IUser, Movie } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MOVIEDB } from 'src/app/app.config';
import { map, switchMap, filter } from 'rxjs/operators';

@Injectable()
export class UserService {
  session = this._authService.getSessionLocalstore() || null;

  constructor(private _http: HttpClient, private _authService: AuthService) {}

  getCurrentUser(session) {
    const url = `https://api.themoviedb.org/3/account?api_key=${MOVIEDB.APP_KEY}&session_id=${session}`;
    return this._http.get<IUser>(url);
  }

  addToFavorites(movieID): Observable<{}> {
    return this.getCurrentUser(this.session).pipe(
      filter(user => !!user),
      switchMap(user => {
        let user_id = user.id;
        const body = { media_type: 'movie', media_id: movieID, favorite: true };
        const url = `${MOVIEDB.BASE_URL}account/${user_id}/favorite?api_key=${MOVIEDB.APP_KEY}&session_id=${this.session}`;
        return this._http.post(url, body);
      })
    );
  }

  getFavoriteMovies(): Observable<Movie[]> {
    return this.getCurrentUser(this.session).pipe(
      filter(user => !!user),
      switchMap(user => {
        const url = `${MOVIEDB.BASE_URL}account/${user.id}/favorite/movies?&sort_by=created_at.asc&page=1`;
        return this._http.get<Array<Movie>>(url).pipe(map(input => input['results'].map(movies => new Movie(movies))));
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { IUser, Movie } from '../models';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MOVIEDB } from 'src/app/app.config';
import { switchMap, map, first } from 'rxjs/operators';

@Injectable()
export class UserService {
  currentUser: IUser;
  session = this._authService.getSessionLocalstore() || null;

  constructor(private _http: HttpClient, private _authService: AuthService) {
    this.fetchUser(this.session)
      .pipe(first())
      .subscribe(user => {
        this.currentUser = user;
      });
    console.log(this.currentUser);
  }

  fetchUser(session) {
    const url = `https://api.themoviedb.org/3/account?api_key=${MOVIEDB.APP_KEY}&session_id=${session}`;
    return this._http.get<IUser>(url);
  }

  addToFavorites(movieID): Observable<{}> {
    if (this.currentUser) {
      let user_id = this.currentUser.id;
      debugger;
      const body = { media_type: 'movie', media_id: movieID, favorite: true };
      const url = `${MOVIEDB.BASE_URL}account/${user_id}/favorite?api_key=${MOVIEDB.APP_KEY}&session_id=${this.session}`;
      return this._http.post(url, body);
    }
  }

  getFavoriteMovies(): Observable<Movie[]> {
    if (this.currentUser) {
      const url = `${MOVIEDB.BASE_URL}account/${this.currentUser.id}/favorite/movies?&sort_by=created_at.asc&page=1`;
      return this._http.get<Array<Movie>>(url).pipe(map(input => input['results'].map(movies => new Movie(movies))));
    }
  }
}

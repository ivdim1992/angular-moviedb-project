import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromAppStore from '../../../store/store.reducer';
import * as fromMoviesSelectors from '../../store/movies.selectors';
import * as fromMoviesActions from '../../store/movies.actions';

@Component({
  selector: 'moviedb-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  myFavoriteMovies$: Observable<Movie[]> = this._store.select(fromMoviesSelectors.selectFavoriteMovies);
  imagePath: string;

  constructor(private _store: Store<fromAppStore.AppState>) { }

  ngOnInit() {
    this._store.dispatch(new fromMoviesActions.GetFavoriteMovies());
    this.imagePath = 'https://image.tmdb.org/t/p/w92';
  }
}

import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromMoviesActions from '@movieStore/movies.actions';
import * as fromMoviesSelectors from '@movieStore/movies.selectors';
import * as fromAppStore from '@appStore/store.reducer';

@Component({
  selector: 'moviedb-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  myFavoriteMovies$: Observable<Movie[]> = this._store.select(fromMoviesSelectors.selectFavoriteMovies);
  imagePath: string;

  constructor(private _store: Store<fromAppStore.AppState>) {}

  ngOnInit() {
    this._store.dispatch(new fromMoviesActions.GetFavoriteMovies());
    this.imagePath = 'https://image.tmdb.org/t/p/w92';
  }
}

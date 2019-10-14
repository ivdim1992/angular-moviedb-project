import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromMoviesActions from '@movieStore/movies.actions';
import * as fromMoviesSelectors from '@movieStore/movies.selectors';
import * as fromAppStore from '@appStore/store.reducer';

@Component({
  selector: 'moviedb-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {
  constructor(private _store: Store<fromAppStore.AppState>) {}

  searchedMovies$: Observable<Movie[]> = this._store.select(fromMoviesSelectors.selectSearchedMovies);

  ngOnInit() {
    this._store.dispatch(new fromMoviesActions.GetSearchedMovies());
  }
}

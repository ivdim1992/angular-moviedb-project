import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromMoviesActions from '../../store/movies.actions';
import * as fromAppStore from '../../../store/store.reducer';
import * as fromMoviesSelectors from '../../store/movies.selectors';

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

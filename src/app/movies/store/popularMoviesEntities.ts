import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Movie } from 'src/app/shared/models';
import * as fromMoviesActions from './movies.actions';

export interface State extends EntityState<Movie> {
  selectedMovieId: number | null;
  loaded: boolean;
  loading: boolean;
}

export function selectMovieId(a: Movie): number {
  //In this case this would be optional since primary key is id
  return a.id;
}

export const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>({
  selectId: (movie: Movie) => movie.id
});

export const initialState: State = adapter.getInitialState({
  selectedMovieId: null,
  loaded: false,
  loading: false
});

export function popularMoviesReducer(state = initialState, action: fromMoviesActions.MoviesActions) {
  switch (action.type) {
    case fromMoviesActions.MoviesActionTypes.GET_POPULAR_MOVIES:
      return {
        ...state,
        page: action.payload,
        loading: true,
        loaded: false
      };

    case fromMoviesActions.MoviesActionTypes.GET_POPULAR_MOVIES_SUCCESS: {
      return {
        ...state,
        ...adapter.addAll(action.payload, state),
        loading: false,
        loaded: true
      };
    }
  }
}

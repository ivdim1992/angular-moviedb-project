import { MovieDetails } from './../../shared/models/movie-details.model';
import { Movie } from 'src/app/shared/models';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as fromMoviesActions from './movies.actions';

export interface MovieState {
  popularMovies: PopularMoviesState;
  topRatedMovies: TopRatedMoviesState;
  movieDetails: MovieDetails;
  searchMovies: Movie[];
  favoriteMovies: FavoriteMoviesState;
  loading: boolean;
}

export function sortById(m1: Movie, m2: Movie) {
  const compare = m1.id - m2.id;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}

//         POPULAR MOVIES
export interface PopularMoviesState extends EntityState<Movie> {}
export const popularMoviesAdapter = createEntityAdapter<Movie>({
  sortComparer: sortById
});
export const popularMoviesInitialState: PopularMoviesState = popularMoviesAdapter.getInitialState({});
//         TOP RATED MOVIES
export interface TopRatedMoviesState extends EntityState<Movie> {}
export const topRatedMoviesAdapter = createEntityAdapter<Movie>({
  sortComparer: sortById
});
export const topRatedMoviesInitialState: TopRatedMoviesState = popularMoviesAdapter.getInitialState({});

// FAVORITE MOVIES
export interface FavoriteMoviesState extends EntityState<Movie> {}
export const favoriteMoviesAdapter = createEntityAdapter<Movie>({});
export const favoriteMoviesInitialState: FavoriteMoviesState = favoriteMoviesAdapter.getInitialState({});

const initialState: MovieState = {
  popularMovies: popularMoviesInitialState,
  topRatedMovies: topRatedMoviesInitialState,
  movieDetails: null,
  searchMovies: null,
  favoriteMovies: favoriteMoviesInitialState,
  loading: false
};

export function movieReducer(state = initialState, action: fromMoviesActions.MoviesActions) {
  switch (action.type) {
    case fromMoviesActions.MoviesActionTypes.GET_POPULAR_MOVIES:
      return { ...state, page: action.payload, loading: true };

    case fromMoviesActions.MoviesActionTypes.GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: popularMoviesAdapter.addMany(action.payload.popularMovies, state.popularMovies),
        loading: false
      };

    case fromMoviesActions.MoviesActionTypes.GET_TOP_RATED_MOVIES:
      return {
        ...state,
        page: action.payload,
        loading: true
      };

    case fromMoviesActions.MoviesActionTypes.GET_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        topRatedMovies: topRatedMoviesAdapter.addMany(action.payload.topRatedMovies, state.topRatedMovies),
        loading: false
      };

    case fromMoviesActions.MoviesActionTypes.GET_SEARCHED_MOVIES:
      return {
        ...state,
        loading: true
      };

    case fromMoviesActions.MoviesActionTypes.GET_SEARCHED_MOVIES_SUCCESS:
      return {
        ...state,
        searchMovies: action.payload,
        loading: false
      };

    case fromMoviesActions.MoviesActionTypes.GET_MOVIE_DETAILS:
      return {
        ...state,
        loading: true
      };

    case fromMoviesActions.MoviesActionTypes.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
        loading: false
      };

    case fromMoviesActions.MoviesActionTypes.GET_FAVORITE_MOVIES:
      return {
        ...state,
        loading: true
      };

    case fromMoviesActions.MoviesActionTypes.GET_FAVORITE_MOVIES_SUCCESS:
      return {
        ...state,
        favoriteMovies: favoriteMoviesAdapter.addAll(action.payload.favoriteMovies, state.favoriteMovies),
        loading: false
      };

    default: {
      return state;
    }
  }
}
// Popular Movies
export const selectPopularMoviesState = (state: MovieState) => state.popularMovies;
export const { selectIds: popularMoviesIds, selectAll: selectAllPopularMovies } = popularMoviesAdapter.getSelectors();
//Top Rated Movies
export const selectTopRatedMoviesState = (state: MovieState) => state.topRatedMovies;
export const {
  selectIds: topRatedMoviesIds,
  selectAll: selectAllTopRatedMovies
} = topRatedMoviesAdapter.getSelectors();
// FAVORITE MOVIES
export const selectFavoriteMoviesState = (state: MovieState) => state.favoriteMovies;
export const {
  selectIds: favoriteMoviesIds,
  selectAll: selectAllFavoriteMovies
} = favoriteMoviesAdapter.getSelectors();

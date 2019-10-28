import { MovieDetails } from './../../shared/models/movie-details.model';
import { Movie } from 'src/app/shared/models';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as fromMoviesActions from './movies.actions';

export interface MovieState {
  popularMovies: PopularMoviesState
  topRatedMovies: Movie[];
  movieDetails: MovieDetails;
  searchMovies: Movie[];
  favoriteMovies: Movie[];
  loading: boolean;
}


//         POPULAR MOVIES
export interface PopularMoviesState extends EntityState<Movie> { }
export const popularMoviesAdapter = createEntityAdapter<Movie>({})
export const popularMoviesInitialState: PopularMoviesState = popularMoviesAdapter.getInitialState({})
//         TOP RATED MOVIES
export interface TopRatedMoviesState extends EntityState<Movie> { }
export const topRatedMoviesAdapter = createEntityAdapter<Movie>({})
export const topRatedMoviesInitialState: TopRatedMoviesState = popularMoviesAdapter.getInitialState({})



const initialState: MovieState = {
  popularMovies: popularMoviesInitialState,
  topRatedMovies: null,
  movieDetails: null,
  searchMovies: null,
  favoriteMovies: null,
  loading: false
};


export function movieReducer(state = initialState, action: fromMoviesActions.MoviesActions) {
  switch (action.type) {
    case fromMoviesActions.MoviesActionTypes.GET_POPULAR_MOVIES:
      return { ...state, page: action.payload, loading: true }

    case fromMoviesActions.MoviesActionTypes.GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: popularMoviesAdapter.addMany(action.payload.popularMovies, state.popularMovies)
      }


    case fromMoviesActions.MoviesActionTypes.GET_TOP_RATED_MOVIES:
      return {
        ...state,
        page: action.payload,
        loading: true
      };

    case fromMoviesActions.MoviesActionTypes.GET_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        topRatedMovies: state.topRatedMovies ? state.topRatedMovies.concat(action.payload) : action.payload,
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
        isLoading: true
      };

    case fromMoviesActions.MoviesActionTypes.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
        isLoading: false
      };

    case fromMoviesActions.MoviesActionTypes.GET_FAVORITE_MOVIES:
      return {
        ...state,
        loading: true
      };
    case fromMoviesActions.MoviesActionTypes.GET_FAVORITE_MOVIES_SUCCESS:
      return {
        ...state,
        favoriteMovies: action.payload,
        loading: false
      };

    default: {
      return state;
    }
  }
}

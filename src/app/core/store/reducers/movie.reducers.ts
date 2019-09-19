import { MoviesActions, MoviesActionTypes } from './../actions/movie.actions';
import { Movie } from 'src/app/shared/models';

export interface MovieState {
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  favoriteMovies: Movie[];
}

export const initialMovieState: MovieState = {
  popularMovies: null,
  topRatedMovies: null,
  favoriteMovies: null
};

export const movieReducers = (state = initialMovieState, action: MoviesActions): MovieState => {
  switch (action.type) {
    case MoviesActionTypes.LoadPopularMoviesSuccess: {
      return {
        ...state,
        popularMovies: action.payload
      };
    }

    case MoviesActionTypes.LoadTopRatedMoviesSuccess: {
      return {
        ...state,
        topRatedMovies: action.payload
      };
    }

    // case MoviesActionTypes.LoadFavoriteMoviesSuccess: {
    //   return {
    //     ...state,
    //     favoriteMovies: action.payload
    //   };
    // }

    default: {
      return state;
    }
  }
};

export const getPopularMovies = (state: MovieState) => state.popularMovies;
export const getTopRatedMovies = (state: MovieState) => state.topRatedMovies;
// export const getFavoriteMovies = (state: MovieState) => state.favoriteMovies;

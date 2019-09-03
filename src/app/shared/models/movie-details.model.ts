export interface IMovieDetails {
  title: string;
  poster_path: string;
  overview: string;
  genres: Array<{ id: string; name: string }>;
  budget: number;
  release_date: string;
  vote_average: number;
  runtime: number;
}

export class MovieDetails {
  movieTitle: string;
  imagePath: string;
  genres: Array<{ id: string; name: string }>;
  description: string;
  budget: number;
  releaseDate: string;
  voteAverage: number;
  runtime: number;

  constructor(input?: IMovieDetails) {
    if (input) {
      this.movieTitle = input.title;
      this.imagePath = input.poster_path;
      this.genres = input.genres;
      this.description = input.overview;
      this.budget = input.budget;
      this.releaseDate = input.release_date;
      this.voteAverage = input.vote_average;
      this.runtime = input.runtime;
    }
  }
}

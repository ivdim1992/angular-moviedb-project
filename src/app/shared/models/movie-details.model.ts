export interface IMovieDetails {
  title: string;
  poster_path: string;
  overview: string;
  genres: Array<{ id: string; name: string }>;
}

export class MovieDetails {
  movieTitle: string;
  imagePath: string;
  genres: Array<{ id: string; name: string }>;
  description: string;

  constructor(input?: IMovieDetails) {
    if (input) {
      this.movieTitle = input.title;
      this.imagePath = input.poster_path;
      this.genres = input.genres;
      this.description = input.overview;
    }
  }
}

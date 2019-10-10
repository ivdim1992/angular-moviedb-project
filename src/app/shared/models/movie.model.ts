export interface IMovieInput {
  id: number;
  title: string;
  poster_path: string;
}

export class Movie {
  id: number;
  title: string;
  imagePath: string;

  constructor(input?: IMovieInput) {
    if (input) {
      this.id = input.id;
      this.title = input.title;
      this.imagePath = input.poster_path;
    }
  }
}

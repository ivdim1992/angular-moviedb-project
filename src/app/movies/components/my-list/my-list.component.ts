import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models';
import { MovieService } from '../../shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'moviedb-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  myFavoriteMovies$: Observable<Array<Movie>>;
  imagePath: string;
  constructor(private _movieService: MovieService) {}

  ngOnInit() {
    this.imagePath = 'https://image.tmdb.org/t/p/w92';
    this.myFavoriteMovies$ = this._movieService.getFavoriteMovies();
  }
}

import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MatDialog } from '@angular/material';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { MovieDetailsComponent } from 'src/app/movies/components';
import { AuthService, SnackBarService } from '../../services';
import { MovieService } from 'src/app/movies/shared/services';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'moviedb-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  constructor(private _dialog: MatDialog, private _movieService: MovieService, private _snackBar: SnackBarService) {}

  @Input() movie: Movie;
  @Input() favoriteMovies: Movie[];

  imagePath: string;
  isInFavorites: boolean = false;
  favoriteMovies$: Observable<Array<Movie>>;

  ngOnInit() {
    this.imagePath = 'https://image.tmdb.org/t/p/w185' + this.movie.imagePath;
  }

  addToFavorites() {
    this._movieService
      .getUserIdAndMarkAsFavorite(this.movie.id)
      .toPromise()
      .then(_ => {
        this._snackBar.open({
          message: 'Successfuly added to favorites'
        });
      })
      .catch(err => {
        this._snackBar.open({
          message: 'There is problem with adding your movie to favorites'
        });
      });
  }

  onClicked() {
    const dialogRef = this._dialog.open(MovieDetailsComponent, {
      maxWidth: '800px',
      data: this.movie,
      panelClass: 'movie-dialog'
    });
  }
}

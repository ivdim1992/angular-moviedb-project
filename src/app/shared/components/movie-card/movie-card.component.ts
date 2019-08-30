import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MovieDetailsComponent } from 'src/app/movies/components';
import { SnackBarService } from '../../services';
import { MovieService } from 'src/app/movies/shared/services';
import { Movie } from '../../models';

@Component({
  selector: 'moviedb-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit, DoCheck {
  constructor(private _dialog: MatDialog, private _movieService: MovieService, private _snackBar: SnackBarService) {}

  @Input() movie: Movie;
  @Input() favoriteIDs: [];
  IsInFavortie: boolean;
  imagePath: string;

  ngOnInit() {
    this.imagePath = 'https://image.tmdb.org/t/p/w185' + this.movie.imagePath;
  }

  ngDoCheck() {
    if (this.favoriteIDs) {
      this.favoriteIDs.map(favIds => {
        this.IsInFavortie = this.movie.id === favIds ? true : false;
      });
    }
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
          message: 'You have to be logged in to add to favorites!'
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

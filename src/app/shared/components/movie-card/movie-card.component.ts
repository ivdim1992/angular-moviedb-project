import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SnackBarService, UserService } from '../../services';
import { Movie } from '../../models';
import { MovieDetailsModalComponent } from 'src/app/movies/components';

@Component({
  selector: 'moviedb-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit, DoCheck {
  constructor(private _dialog: MatDialog, private _snackBar: SnackBarService, private _userService: UserService) {}

  @Input() movie: Movie;
  @Input() favoriteMoviesIDs: number[];

  IsInFavortie: boolean = false;
  imagePath: string;
  btnText = 'View Details';
  session: string = localStorage.getItem('session');
  isLogged: string = localStorage.getItem('isLogged');

  ngOnInit() {
    this.imagePath = 'https://image.tmdb.org/t/p/w185' + this.movie.imagePath;
  }

  ngDoCheck() {
    if (this.isLogged && this.favoriteMoviesIDs) {
      this.IsInFavortie = this.favoriteMoviesIDs.includes(this.movie.id) ? true : false;
    }
  }

  addToFavorites() {
    this._userService
      .addToFavorites(this.movie.id)
      .toPromise()
      .then(_ => {
        this.IsInFavortie = true;
        this._snackBar.open({
          message: 'Successfuly added to favorites'
        });
      });
  }

  onClicked() {
    const dialogRef = this._dialog.open(MovieDetailsModalComponent, {
      maxWidth: '800px',
      data: this.movie,
      panelClass: 'movie-dialog'
    });
  }
}

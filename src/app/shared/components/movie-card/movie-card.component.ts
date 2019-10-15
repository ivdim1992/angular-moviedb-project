import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SnackBarService, UserService } from '../../services';
import { Movie } from '../../models';
import { MovieDetailsModalComponent } from 'src/app/movies/components';
import { Observable } from 'rxjs';
import * as fromAppStore from '@appStore/store.reducer';
import * as fromAuthSelectors from '@authStore/auth.selectors';

@Component({
  selector: 'moviedb-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  constructor(
    private _dialog: MatDialog,
    private _snackBar: SnackBarService,
    private _userService: UserService,
    private _store: Store<fromAppStore.AppState>
  ) {}

  @Input() movie: Movie;
  @Input() favoriteMoviesIds: number[];

  isInFavortie: boolean = false;
  imagePath: string;
  btnText = 'View Details';
  isLogged: Observable<boolean> = this._store.select(fromAuthSelectors.selectIsLogged);

  ngOnInit() {
    if (!this.movie.imagePath) {
      this.imagePath = '../../assets/images/no-poster.png';
    } else {
      this.imagePath = 'https://image.tmdb.org/t/p/w185' + this.movie.imagePath;
    }
  }

  addToFavorites() {
    this._userService.addToFavorites(this.movie.id).subscribe(res => {
      if (res['status_message']) {
        this._snackBar.open({
          message: 'Successfuly added to favorites'
        });
      }
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

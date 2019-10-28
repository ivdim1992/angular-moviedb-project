import { Movie } from './../../../shared/models/movie.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { MovieDetails } from 'src/app/shared/models';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';
import { AppState } from '@appStore/store.reducer';
import { Store } from '@ngrx/store';
import * as fromMoviesActions from '@movieStore/movies.actions';
import * as fromMoviesSelectors from '@movieStore/movies.selectors';

export interface IMovieData {
  id: string;
  imagePath: string;
  title: string;
}

@Component({
  selector: 'moviedb-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss'],
  animations: [
    trigger('movieDetailsLoaded', [
      transition(
        'true => false',
        useAnimation(bounceIn, {
          delay: 5000
        })
      )
    ])
  ]
})
export class MovieDetailsModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MovieDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie,
    private _store: Store<AppState>
  ) {}

  selectedMovie$: Observable<MovieDetails> = this._store.select(fromMoviesSelectors.selectMovieDetails);
  isLoading$: Observable<boolean> = this._store.select(fromMoviesSelectors.selectLoadingProp);
  btnText: string = 'View More';

  ngOnInit() {
    this._store.dispatch(new fromMoviesActions.GetMovieDetails({ movieId: this.data.id }));
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Movie, MovieDetails } from 'src/app/shared/models';
import { MovieService } from '../../shared/services';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceIn } from 'ng-animate';

export interface IMovieData {
  id: string,
  imagePath: string,
  titke: string
}

@Component({
  selector: 'moviedb-movie-details',
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss'],
  animations: [
    trigger('movieDetailsLoaded', [
      transition(
        'false => true',
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
    @Inject(MAT_DIALOG_DATA) public data: IMovieData,
    private _movieService: MovieService
  ) { }

  private _destroyed$ = new Subject<boolean>();
  movieGenres: string[];
  movieDetails: MovieDetails;
  movieDetailsLoaded: boolean = false;
  btnText: string = 'View More';

  ngOnInit() {
    this._movieService
      .getMovieDetails(this.data['id'])
      .pipe(takeUntil(this._destroyed$))
      .subscribe(details => {
        this.movieDetails = details;
        this.movieGenres = details.genres.map(genres => genres.name);
        this.movieDetailsLoaded = true;
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

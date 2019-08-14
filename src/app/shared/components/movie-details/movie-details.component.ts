import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Movie } from '../../models/movie.model';
import { Observable, Subject } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { takeUntil } from 'rxjs/operators';

export interface IMovieData {
  movie: Movie;
}

@Component({
  selector: 'moviedb-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MovieDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMovieData,
    private _movieService: MovieService
  ) {}
  private _destroyed$ = new Subject<boolean>();
  movieGenres: any[];
  movieDetails;

  ngOnInit() {
    this._movieService
      .getDetails(this.data['id'])
      .pipe(takeUntil(this._destroyed$))
      .subscribe(details => {
        this.movieDetails = details;
        this.movieGenres = details.genres.map(genres => genres.name);
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}

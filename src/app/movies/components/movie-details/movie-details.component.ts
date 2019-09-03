import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { MovieDetails } from 'src/app/shared/models';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'moviedb-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  id: string;
  movieDetails: MovieDetails;
  movieGenres: string[];
  movieDetailsLoaded: boolean = false;
  private _destroyed$ = new Subject<boolean>();

  constructor(private _movieSevice: MovieService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this._route.snapshot.params.id;
    this._movieSevice.getMovieDetails(this.id).pipe(takeUntil(this._destroyed$))
      .subscribe(details => {
        this.movieDetails = details;
        this.movieGenres = details.genres.map(genres => genres.name);
        this.movieDetailsLoaded = true;
      });
  }
}

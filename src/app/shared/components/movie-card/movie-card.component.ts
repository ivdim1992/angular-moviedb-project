import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { MovieDetailsComponent } from 'src/app/movies/components';

@Component({
  selector: 'moviedb-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  imagePath: string;
  constructor(private _dialog: MatDialog) {}

  movieDetails$: Observable<any>;
  ngOnInit() {
    this.imagePath = 'https://image.tmdb.org/t/p/w154' + this.movie.imagePath;
  }

  onClicked() {
    const dialogRef = this._dialog.open(MovieDetailsComponent, {
      maxWidth: '800px',
      data: this.movie,
      panelClass: 'movie-dialog'
    });
  }
}

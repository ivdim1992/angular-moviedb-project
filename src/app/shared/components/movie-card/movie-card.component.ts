import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MatDialog, MatDialogModule } from '@angular/material';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';

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

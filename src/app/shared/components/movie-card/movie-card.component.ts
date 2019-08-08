import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'moviedb-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;

  constructor() {}

  ngOnInit() {}
}

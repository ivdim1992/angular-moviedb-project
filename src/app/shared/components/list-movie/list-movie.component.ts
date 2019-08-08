import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'moviedb-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {
  @Input() movies: Movie[];

  constructor() {}

  ngOnInit() {}
}

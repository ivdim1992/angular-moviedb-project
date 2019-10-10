import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models';

@Component({
  selector: 'moviedb-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() items: Movie[];
  @Input() favoriteMoviesIds: number[];
  constructor() {}

  ngOnInit() {}
}

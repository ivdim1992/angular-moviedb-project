import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models';
import { Observable, Subject } from 'rxjs';
import { UserService } from 'src/app/shared/services';

@Component({
  selector: 'moviedb-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  myFavoriteMovies$: Observable<Movie[]>;
  imagePath: string;
  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.myFavoriteMovies$ = this._userService.getFavoriteMovies();
    this.imagePath = 'https://image.tmdb.org/t/p/w92';
  }
}

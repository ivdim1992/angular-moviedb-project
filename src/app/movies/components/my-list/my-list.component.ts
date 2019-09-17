import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models';
import { Observable, Subject } from 'rxjs';
import { UserService } from 'src/app/shared/services';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'moviedb-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
  myFavoriteMovies: Movie[];
  imagePath: string;
  private _destroy = new Subject<boolean>();
  constructor(private _userService: UserService) {}

  ngOnInit() {
    this.imagePath = 'https://image.tmdb.org/t/p/w92';
    this._userService
      .getFavoriteMovies()
      .pipe(takeUntil(this._destroy))
      .subscribe(movies => {
        this.myFavoriteMovies = movies;
      });
  }
}

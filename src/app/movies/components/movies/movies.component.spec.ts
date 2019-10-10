import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Movie } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import { selectTopRatedMovies, selectPopularMovies } from '../../store';
import { MovieState } from '../../store/movies.reducer';
// import { selectTopRatedMovies, selectPopularMovies } from 'src/app/store/store.reducer';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let store: MockStore<{ popularMovies: Movie[]; topRatedMovies: Movie[] }>;
  const initialState = { popularMovies: null, topRatedMovies: null };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesComponent],
      imports: [CommonModule, SharedModule, RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.get<Store<MovieState>>(Store);

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should has values', () => {
      store.setState({
        popularMovies: [{ title: 'popular', id: 123, imagePath: 'images/popular' }],
        topRatedMovies: [{ title: 'top-rated', id: 222, imagePath: 'images/toprated' }]
      });
      expect(store.select(selectTopRatedMovies)).toBeTruthy();
    });

    it('should has values', () => {
      store.setState({
        popularMovies: [{ title: 'popular', id: 123, imagePath: 'images/popular' }],
        topRatedMovies: [{ title: 'top-rated', id: 222, imagePath: 'images/toprated' }]
      });
      expect(store.select(selectPopularMovies)).toBeTruthy();
    });
  });
});

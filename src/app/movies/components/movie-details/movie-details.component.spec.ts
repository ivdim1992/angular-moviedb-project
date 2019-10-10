import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialSharedModule } from 'src/app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieService } from '../../shared/services';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieDetails } from 'src/app/shared/models';
import { of, Observable } from 'rxjs';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsComponent],
      imports: [
        CommonModule,
        SharedModule,
        MaterialSharedModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ],
      providers: [MovieService]
    }).compileComponents();
  }));

  describe(':', () => {
    function setup() {
      const fixture = TestBed.createComponent(MovieDetailsComponent);
      const component = fixture.componentInstance;
      const movieService = fixture.debugElement.injector.get(MovieService);

      return { fixture, component, movieService };
    }

    it('should create app component', () => {
      const { component } = setup();
      expect(component).toBeTruthy();
    });

    it('should display logged-in user name', () => {
      const { fixture, component, movieService } = setup();
      const mockDetails: Observable<MovieDetails> = of({
        movieTitle: 'aadasd',
        imagePath: 'asdasd',
        genres: [{ id: '1', name: 'horror' }, { id: '2', name: 'comedy' }],
        description: 'interesting',
        budget: 123,
        releaseDate: '12/03/2012',
        voteAverage: 12,
        runtime: 1
      });

      spyOn(movieService, 'getMovieDetails').and.returnValue(mockDetails);

      fixture.detectChanges();
      const compile = fixture.debugElement.nativeElement;
      const budget = compile.querySelector('.details__details-budget');
      const runtime = compile.querySelector('.details__details-runtime');
      const vote = compile.querySelector('.details__details-averageVote');
      const genres = compile.querySelector('.details__details-genres');
      const description = compile.querySelector('.details__details-description');

      expect(budget.textContent).toBe('Budget: 123');
      expect(runtime.textContent).toBe('Runtime: 1m.');
      expect(vote.textContent).toBe('Average Vote: 12/10');
      expect(genres.textContent).toBe('Genres: horror, comedy');
      expect(description.textContent).toBe('Overview: interesting');
    });
  });
});

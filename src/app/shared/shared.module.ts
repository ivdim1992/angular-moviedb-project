import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { MovieService } from './services/movie.service';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import {
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

const modules = [
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    MoviesComponent,
    ListMovieComponent,
    MovieCardComponent,
    FlexLayoutModule
  ],
  imports: [BrowserModule, modules, HttpClientModule],
  providers: [MovieService],
  exports: [HomeComponent, FooterComponent, modules, FlexLayoutModule]
})
export class SharedModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: SharedModule | null
  ) {
    if (parentModule) {
      throw new Error(
        'SharedModule is already loaded. Import it in the AppModule only.'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}

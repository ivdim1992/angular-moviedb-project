import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core';

// import { MaterialSharedModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { MovieService } from './services/movie.service';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ListMovieComponent } from './components/list-movie/list-movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    MoviesComponent,
    ListMovieComponent,
    MovieCardComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [MovieService],
  exports: [HomeComponent, FooterComponent]
})
export class SharedModule {
  //   constructor(
  //     @Optional()
  //     @SkipSelf()
  //     parentModule: SharedModule | null
  //   ) {
  //     if (parentModule) {
  //       throw new Error(
  //         'SharedModule is already loaded. Import it in the AppModule only.'
  //       );
  //     }
  //   }
  //   static forRoot(): ModuleWithProviders {
  //     return {
  //       ngModule: SharedModule
  //     };
  //   }
}

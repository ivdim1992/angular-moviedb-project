import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MaterialSharedModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
// MOVIES and HOME
import { MovieService } from './services/movie.service';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MaterialSharedModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ListItemComponent } from './components/list-items/list-items.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { SharedRoutingModule } from './shared-routing.module';

import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SnackBarService } from './services/snack-bar.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    MoviesComponent,
    MovieCardComponent,
    ListItemComponent,
    HeaderComponent,
    TopRatedMoviesComponent,
    PopularMoviesComponent,
    MovieDetailsComponent
  ],
  imports: [HttpClientModule, MaterialSharedModule, FormsModule, FlexLayoutModule, SharedRoutingModule, CommonModule],
  providers: [MovieService, SnackBarService, AuthGuard],
  exports: [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    MovieDetailsComponent,
    MovieCardComponent,
    FlexLayoutModule,
    MaterialSharedModule
  ],
  entryComponents: [MovieDetailsComponent]
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

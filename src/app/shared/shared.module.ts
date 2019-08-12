import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core';

// import { MaterialSharedModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
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
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    MoviesComponent,
    MovieCardComponent,
    ListItemComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialSharedModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
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

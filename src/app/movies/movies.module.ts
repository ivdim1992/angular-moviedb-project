import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { MaterialSharedModule } from '../material/material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../core/interceptors';

import * as components from './components';
import * as services from './shared/services';

@NgModule({
  declarations: [
    components.MoviesComponent,
    components.PopularMoviesComponent,
    components.TopRatedMoviesComponent,
    components.SearchMoviesComponent,
    components.MyListComponent,
    components.MovieDetailsModalComponent,
    components.MovieDetailsComponent
  ],
  imports: [MoviesRoutingModule, CommonModule, RouterModule, SharedModule, MaterialSharedModule],
  exports: [components.MoviesComponent],
  providers: [services.MovieService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  entryComponents: [components.MovieDetailsModalComponent]
})
export class MoviesModule {}

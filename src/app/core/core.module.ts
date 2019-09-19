import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MoviesModule } from '../movies/movies.module';

import * as components from './components';
import * as guards from './guards';

import { MovieService } from '../movies/shared/services';
import { StoreModule } from '@ngrx/store';
import { movieReducers } from './store/reducers/movie.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/effects/movie.effects';

@NgModule({
  declarations: [components.HeaderComponent, components.HomeComponent, components.FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MoviesModule,
    StoreModule.forFeature('movies', movieReducers),
    EffectsModule.forFeature([MovieEffects])
  ],
  exports: [components.HeaderComponent, components.HomeComponent, components.FooterComponent],
  providers: [guards.AuthGuard, guards.AuthenticatedGuard]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [MovieService]
    };
  }
}

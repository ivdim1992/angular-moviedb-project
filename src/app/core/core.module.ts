import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MoviesModule } from '../movies/movies.module';

import * as components from './components';
import * as guards from './guards';

@NgModule({
  declarations: [components.HeaderComponent, components.HomeComponent, components.FooterComponent],
  imports: [CommonModule, RouterModule, SharedModule, MoviesModule],
  exports: [components.HeaderComponent, components.HomeComponent, components.FooterComponent],
  providers: [guards.AuthGuard]
})
export class CoreModule {
  //   constructor(
  //     @Optional()
  //     @SkipSelf()
  //     parentModule: CoreModule | null
  //   ) {
  //     if (parentModule) {
  //       throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
  //     }
  //   }
  //   static forRoot(): ModuleWithProviders {
  //     return {
  //       ngModule: CoreModule,
  //       providers: [MovieService]
  //     };
  //   }
}

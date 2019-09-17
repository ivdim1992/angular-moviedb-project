import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// MOVIES and HOME
import { MaterialSharedModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import * as services from './services';
import * as components from './components';

@NgModule({
  declarations: [
    components.MovieCardComponent,
    components.ListItemComponent,
    components.SearchComponent,
    components.ButtonComponent,
    components.SpinnerComponent
  ],
  imports: [HttpClientModule, MaterialSharedModule, FormsModule, FlexLayoutModule, CommonModule, ReactiveFormsModule],
  providers: [services.AuthService, services.SnackBarService, services.UserService],
  exports: [
    components.MovieCardComponent,
    components.SearchComponent,
    components.ListItemComponent,
    components.ButtonComponent,
    components.SpinnerComponent,
    FlexLayoutModule,
    MaterialSharedModule,
    ReactiveFormsModule
  ],
  entryComponents: []
})
export class SharedModule {}

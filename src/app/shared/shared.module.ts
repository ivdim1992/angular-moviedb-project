import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [MaterialSharedModule, FormsModule, FlexLayoutModule, CommonModule, ReactiveFormsModule],
  providers: [services.SnackBarService],
  exports: [
    components.MovieCardComponent,
    components.SearchComponent,
    components.ListItemComponent,
    components.ButtonComponent,
    components.SpinnerComponent,
    FlexLayoutModule,
    MaterialSharedModule,
    ReactiveFormsModule,
    CommonModule
  ],
  entryComponents: []
})
export class SharedModule {}

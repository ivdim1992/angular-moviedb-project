import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import {
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTableModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import * as components from './components';

const modules = [
  MatListModule,
  MatSidenavModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatSelectModule,
  MatIconModule,
  MatSnackBarModule,
  MatMenuModule,
  MatCardModule,
  MatDialogModule,
  MatTableModule
];

@NgModule({
  declarations: [components.MatIconComponent, components.MaterialSnackbar, components.MatCloseIconComponent, components.MatArrowLeftComponent],
  imports: modules,
  exports: [...modules, components.MatIconComponent, components.MaterialSnackbar, components.MatCloseIconComponent, components.MatArrowLeftComponent],
  providers: []
})
export class MaterialSharedModule { }

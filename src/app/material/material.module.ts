import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

// components
import { MaterialSnackbar } from './components/material-snackbar/material-snackbar.component';
import { MatIconComponent } from './components/mat-icon/mat-icon.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

import { FormsModule } from '@angular/forms';

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
  // MatRadioModule,
  // MatOptionModule,
  // MatCheckboxModule,
  MatDialogModule,
  // MatProgressSpinnerModule
];

@NgModule({
  declarations: [MaterialSnackbar, MatIconComponent],
  imports: modules,
  exports: [...modules, MaterialSnackbar, MatIconComponent],
  providers: []
})
export class MaterialSharedModule { }

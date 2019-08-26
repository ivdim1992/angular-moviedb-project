import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components';
import { RegisterRoutingModule } from './register-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [components.RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RegisterModule { }

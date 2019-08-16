import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialSharedModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, ReactiveFormsModule, SharedModule, CommonModule],
  providers: [],
  exports: []
})
export class LoginModule {}

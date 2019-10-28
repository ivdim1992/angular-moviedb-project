import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuthReducer from './store/auth.reducer';
import * as fromAuthEffects from './store/auth.effects';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, SharedModule, RouterModule, StoreModule.forFeature('auth', fromAuthReducer.authReducer), EffectsModule.forFeature([fromAuthEffects.AuthEffects])],
  providers: [],
  exports: []
})
export class LoginModule { }

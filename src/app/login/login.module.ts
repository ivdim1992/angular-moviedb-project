import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import * as fromAppStore from '@appStore/store.reducer';
import * as fromAuthEffects from '@authStore/auth.effects';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    SharedModule,
    RouterModule,
    StoreModule.forFeature('auth', fromAppStore.storeReducer.auth),
    EffectsModule.forFeature([fromAuthEffects.AuthEffects])
  ],
  providers: [],
  exports: []
})
export class LoginModule {}

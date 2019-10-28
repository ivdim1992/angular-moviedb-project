import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AuthInterceptor } from './core/interceptors';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CustomSerializer } from './store/router-serializer';
import { appConfig } from './app.config';
import * as fromAppStore from './store/store.reducer';
import * as injectionTokens from './injection-token';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    StoreModule.forRoot(fromAppStore.storeReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    { provide: injectionTokens.APP_CONFIG, useValue: appConfig }
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

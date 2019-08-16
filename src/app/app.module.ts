import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment.prod';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialSharedModule } from './material/material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

// const modules = [AngularFireAuthModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase, 'moviedb-project'),
    AngularFireAuthModule,
    // ...modules,
    NoopAnimationsModule,
    MaterialSharedModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  exports: [AngularFireAuthModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

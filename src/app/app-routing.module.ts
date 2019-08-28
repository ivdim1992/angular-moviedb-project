import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/components';
import { MyListComponent } from './movies/components';
import { AuthGuard } from './core/guards';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent, data: { animation: 'home' } },
  { path: 'my-list', component: MyListComponent, canActivate: [AuthGuard] },
  { path: 'movies', loadChildren: '../app/movies/movies.module#MoviesModule' },
  { path: 'login', loadChildren: '../app/login/login.module#LoginModule' },
  { path: 'register', loadChildren: '../app/register/register.module#RegisterModule' },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

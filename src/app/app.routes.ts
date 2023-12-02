import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { authenticationGuard } from './guards/authentication.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [authenticationGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [authenticationGuard],
  },
  { path: '**', component: NotFoundComponent },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UnavaliableComponent } from './pages/unavaliable/unavaliable.component';

export const routes: Routes = [
    
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'unavaliable', component: UnavaliableComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', redirectTo: '/unavaliable', pathMatch: 'full'}
];

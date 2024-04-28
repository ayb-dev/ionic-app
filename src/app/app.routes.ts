import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'transport',
    loadComponent: () => import('./transport/transport.page').then( m => m.TransportPage)
  },
  {
    path: 'accomodation',
    loadComponent: () => import('./accomodation/accomodation.page').then( m => m.AccomodationPage)
  },
  {
    path: 'activity',
    loadComponent: () => import('./activity/activity.page').then( m => m.ActivityPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'main',
    loadComponent: () => import('./main/main.page').then( m => m.MainPage)
  },
  {
    path: 'saved',
    loadComponent: () => import('./saved/saved.page').then( m => m.SavedPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'booked',
    loadComponent: () => import('./booked/booked.page').then( m => m.BookedPage)
  },
];

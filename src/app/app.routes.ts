import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './components/home.component';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/partials/login/login.component';
import { SectionComponent } from './components/section.component';
import { AnotherComponent } from './components/another.component';

// const APP_ROUTES = [
//   { path: '', name: 'Home', component: HomeComponent },
//   { path: 'user', name: 'User', component: UserComponent },
//   { path: 'section', name: 'Section', component: SectionComponent},
//   { path: 'another', name: 'Another', component: AnotherComponent},
//   { path: 'login', name: 'Login', component: LoginComponent}
// ];

const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

// export const Routing = RouterModule.forRoot(APP_ROUTES);
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

export const APP_ROUTES_PROVIDERS = [
  // provideRouter(routes)
];

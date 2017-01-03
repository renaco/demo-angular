import { RouterModule, Routes } from '@angular/router';
// import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/partials/login/login.component';
import { SectionComponent } from './components/section.component';
import { AnotherComponent } from './components/another.component';

const APP_ROUTES = [
  { path: '', name: 'Home', component: HomeComponent },
  { path: 'user', name: 'User', component: UserComponent },
  { path: 'section', name: 'Section', component: SectionComponent},
  { path: 'another', name: 'Another', component: AnotherComponent},
  { path: 'login', name: 'Login', component: LoginComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);

export const APP_ROUTES_PROVIDERS = [
  // provideRouter(routes)
];

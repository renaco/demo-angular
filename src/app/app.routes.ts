import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home.component';
import { SectionComponent } from './components/section.component';
// import { APP_ROUTES } from './user/user.component';

const APP_ROUTES = [
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent},
  { path: 'section', component: SectionComponent}
];


export const routing = RouterModule.forRoot(APP_ROUTES);

export const APP_ROUTES_PROVIDER = [
  // provideRouter(APP_ROUTES)
];

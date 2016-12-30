import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserComponent } from './components/user/user.component';
// import { APP_ROUTES } from './user/user.component';

const APP_ROUTES = [
  { path: 'user', component: UserComponent },
  { path: '', component: HomeComponent}
];


export const routing = RouterModule.forRoot(APP_ROUTES);

// export const APP_ROUTES_PROVIDER = [
//   provideRouter(APP_ROUTES)
// ];

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

/**  Components */
import { HeaderComponent } from './components/partials/header/header.component';
// import { FooterComponent } from './components/partials/footer/footer.component';
import { LoginComponent } from './components/partials/login/login.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home.component';
import { SectionComponent } from './components/section.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    HeaderComponent,
    // FooterComponent,
    HomeComponent,
    SectionComponent,
    LoginComponent,
    UserComponent
],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

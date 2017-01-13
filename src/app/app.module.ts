import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from './app.routes';

/**  Components */
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { LoginComponent } from './components/partials/login/login.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionComponent } from './components/section.component';
import { AnotherComponent  } from './components/another.component';
import { ArtistComponent  } from './components/artist/artist.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Routing
    ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    AboutComponent,
    NavbarComponent,
    SectionComponent,
    AnotherComponent,
    ArtistComponent,
    LoginComponent,
    UserComponent
],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

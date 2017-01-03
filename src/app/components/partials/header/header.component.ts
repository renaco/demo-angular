import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav>
        <a routerLink="">Home 2</a>
        <a routerLink="user">User 3</a>
        <a routerLink="section">Section 2</a>
        <a routerLink="another">Another 3</a>
        <a routerLink="login">Login</a>
      </nav>
    </header>
  `,
  styles: []
})

export class HeaderComponent {}

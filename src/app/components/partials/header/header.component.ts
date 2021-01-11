import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav>
      <a routerLink="">Home 2</a>
      <a routerLink="user">User 3</a>
      <a routerLink="section">Section 2</a>
      <a routerLink="another">Another 3</a>
      <a routerLink="login">Login</a>
    </nav>
  `,
  styleUrls: ['./header.component.css']
})

export class HeaderComponent { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <nav>
        <a routerLink="home">Home 1</a>
        <a routerLink="section">Section 2</a>
        <a routerLink="">Item 3</a>
      </nav>
    </header>
  `,
  styles: []
})

export class HeaderComponent {}

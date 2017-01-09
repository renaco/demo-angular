import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
    <app-profile></app-profile>
  `,
  styles: []
})

export class HomeComponent {
    title = 'Home Components';

    constructor() { }
}

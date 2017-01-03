import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
    <h1 class="Title">
      {{ title }}
    <h1>
  `,
  styles: []
})

export class HomeComponent {
    title = 'Home Components';

    constructor() { }
}

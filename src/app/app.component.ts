import { Component } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { GitHubService } from './services/github.services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitHubService]
})

export class AppComponent {
  // title = 'Hello World!';
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SpotifyService } from './services/spotify.services';

@Component({
  //moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpotifyService]
})

export class AppComponent {
  // title = 'Hello World!';
}

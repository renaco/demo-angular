import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  obs: any;

  ngOnInit() {
    this.obs = Observable.create(function (observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(true);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      })
    })
  }

  rxjsFun() {
    console.log('just before subscribe');
    this.obs.subscribe({
      next: x => console.log('got value' + x, typeof x),
      error: err => console.error('something wrong ocurred: ' + err),
      complete: () => console.log('done'),
    });
    console.log('Just after subscribe');
  }
}

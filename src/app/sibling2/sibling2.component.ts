import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  clickEventSubscription: Subscription;
  count: number = 0;

  constructor(
    private sharedService: SharedService,
    ) {
    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe(() => {
      this.incrementCount();
    })
  }
  incrementCount() {
    this.count++;
  }

  ngOnInit() {
  }

  clickMe() {

  }

}

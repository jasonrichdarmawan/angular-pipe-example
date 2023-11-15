import { Component, OnInit } from '@angular/core';
import { multiply } from '../shared/pipes/multiply/multiply';

@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.scss']
})
export class App4Component implements OnInit {
  /**
   * @deprecated this is bad example, use pipe like in app3.
   */
  multiply = multiply

  constructor() { }

  ngOnInit(): void {
  }

}

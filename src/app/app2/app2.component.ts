import { Component, OnInit } from '@angular/core';
import { multiply } from '../shared/pipes/multiply/multiply';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss']
})
export class App2Component implements OnInit {
  /**
   * @deprecated this is bad example, use pipe like in app3.
   */
  multiply = multiply

  constructor() { }

  ngOnInit(): void {
  }

}

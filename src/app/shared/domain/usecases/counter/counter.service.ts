import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter: number;

  constructor() {
    this.counter = 1;
  }

  increment() {
    this.counter += 1
  }

  decrement() {
    this.counter -= 1
  }
}

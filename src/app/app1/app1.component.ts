import { Component, OnInit } from '@angular/core';
import { CounterService } from '../shared/domain/usecases/counter/counter.service';
import { Greeter } from '../shared/domain/usecases/greeter/greeter';
import { CurrencyPipe } from '../shared/pipes/currency/currency.pipe';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss']
})
export class App1Component implements OnInit {
  currency: string;
  name: string;

  constructor(
    public counterService: CounterService,
    public currencyPipe: CurrencyPipe,
    public greeter: Greeter
  ) {
    this.currency = currencyPipe.transform("function", "component", 1);
    this.currency = currencyPipe.transform("function", "component", 2);
    this.currency = currencyPipe.transform("function", "component", 2); // calling a function in html will not be memoized.

    this.name = greeter.greet("Jack")
  }

  ngOnInit(): void {
      
  }
}

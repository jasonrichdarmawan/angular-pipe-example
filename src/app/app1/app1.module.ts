import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { App1Component } from './app1.component';
import { App1RoutingModule } from './app1-routing.module';
import { CounterService } from '../shared/domain/usecases/counter/counter.service';
import { Greeter } from '../shared/domain/usecases/greeter/greeter';
import { CurrencyModule } from '../shared/pipes/currency/currency.module';
import { NavModule } from '../shared/presentation/nav/nav.module';


@NgModule({
  declarations: [
    App1Component,
  ],
  imports: [
    CommonModule,
    App1RoutingModule,
    NavModule,
    CurrencyModule,
  ],
  providers: [
    CounterService,
    Greeter,
  ]
})
export class App1Module { }

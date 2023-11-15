import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App3RoutingModule } from './app3-routing.module';
import { App3Component } from './app3.component';
import { NavModule } from '../shared/presentation/nav/nav.module';
import { MultiplyModule } from '../shared/pipes/multiply/multiply.module';


@NgModule({
  declarations: [
    App3Component
  ],
  imports: [
    CommonModule,
    App3RoutingModule,
    NavModule,
    MultiplyModule
  ]
})
export class App3Module { }

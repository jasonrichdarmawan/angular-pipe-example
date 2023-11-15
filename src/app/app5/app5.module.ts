import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App5RoutingModule } from './app5-routing.module';
import { App5Component } from './app5.component';
import { NavModule } from '../shared/presentation/nav/nav.module';
import { MultiplyModule } from '../shared/pipes/multiply/multiply.module';


@NgModule({
  declarations: [
    App5Component
  ],
  imports: [
    CommonModule,
    App5RoutingModule,
    NavModule,
    MultiplyModule
  ]
})
export class App5Module { }

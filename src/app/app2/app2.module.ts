import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App2RoutingModule } from './app2-routing.module';
import { App2Component } from './app2.component';
import { NavModule } from '../shared/presentation/nav/nav.module';


@NgModule({
  declarations: [
    App2Component
  ],
  imports: [
    CommonModule,
    App2RoutingModule,
    NavModule,
  ]
})
export class App2Module { }

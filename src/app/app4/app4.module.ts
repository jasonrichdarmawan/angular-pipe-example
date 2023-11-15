import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App4RoutingModule } from './app4-routing.module';
import { App4Component } from './app4.component';
import { NavModule } from '../shared/presentation/nav/nav.module';


@NgModule({
  declarations: [
    App4Component
  ],
  imports: [
    CommonModule,
    App4RoutingModule,
    NavModule
  ]
})
export class App4Module { }

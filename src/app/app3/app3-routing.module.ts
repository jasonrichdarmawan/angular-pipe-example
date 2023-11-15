import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App3Component } from './app3.component';

const routes: Routes = [
  {
    path: '',
    component: App3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class App3RoutingModule { }

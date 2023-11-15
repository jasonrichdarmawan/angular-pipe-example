import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App4Component } from './app4.component';

const routes: Routes = [
  {
    path: '',
    component: App4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class App4RoutingModule { }

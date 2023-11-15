import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App5Component } from './app5.component';

const routes: Routes = [
  {
    path: '',
    component: App5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class App5RoutingModule { }

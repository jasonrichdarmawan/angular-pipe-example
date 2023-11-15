import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import("./app1/app1.module").then(m => m.App1Module),
  },
  {
    path: 'app2',
    loadChildren: () => import("./app2/app2.module").then(m => m.App2Module),
  },
  // {
  //   path: 'app3',
  //   loadChildren: () => import("./app3/app3.module").then(m => m.App3Module)
  // },
  {
    path: 'app4',
    loadChildren: () => import("./app4/app4.module").then(m => m.App4Module)
  },
  // {
  //   path: 'app5',
  //   loadChildren: () => import("./app5/app5.module").then(m => m.App5Module)
  // },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

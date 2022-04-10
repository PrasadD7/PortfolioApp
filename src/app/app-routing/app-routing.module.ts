import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from "@angular/router";
import { HomeManagerComponent } from '../home/home-manager/home-manager.component';

const routes : Route[] = [
  {
    path:"home",
    component: HomeManagerComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }

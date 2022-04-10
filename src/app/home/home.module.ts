import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { IntroductionComponent } from './introduction/introduction.component';



@NgModule({
  declarations: [
    HomeManagerComponent,
    IntroductionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

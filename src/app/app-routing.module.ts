import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    //el modulo routing principal, siempre será for Root. El los secundarios siempre serán .forChild()
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

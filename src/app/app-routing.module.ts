import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { CountriesModule } from './countries/countries.module';

const routes: Routes = [
  //{
  //  path: '',
  //  component: HomePageComponent
  //},
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'countries',
    //para cargar modulos en las rutas de una manera perezosa, no se puede agregar el module directamente.
    //en esta versión es así, pero en veriones anteriores de ng puede ser diferente. Ahora es más fácil
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule),
  },
  {
    path: '**',
    redirectTo: 'countries'
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

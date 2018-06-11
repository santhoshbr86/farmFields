import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import {OfferZoneComponent } from './offer-zone/offer-zone.component';
import { SignInComponent } from './sign-in/sign-in.component'

const routes:Routes=
[
      {
        path: 'admin',
        component: ExampleComponentComponent
      },
      {
        path: 'home',
        component:HomeComponent
      },
      {
        path:'products',
        component:ProductComponent
      },
      {
        path:'services',
        component:ServiceComponent
      },
      {
        path:'offerZone',
        component:OfferZoneComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'contact',
        component:ContactComponent
      },
      // {
      //   path:'signIn',
      //   component:SignInComponent
      // },
      {
        path: '', 
        redirectTo:'/home',
        pathMatch:'full'
      }
    ];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

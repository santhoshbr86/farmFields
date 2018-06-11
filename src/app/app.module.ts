import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { DataService, MessageDataService } from './data.service';
import {CommonService} from './common.service'; 
import { ProductService } from './product/product.service';

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
import { SignInComponent } from './sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing.module';
import {
  AuthService,
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular5-social-login";
  export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1681468401929721")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("669076791384-4leb00406r9recrmjdm5m612qqlp80ce.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    ExampleComponentComponent,
    ProductComponent,
    ServiceComponent,
    OfferZoneComponent,
    AboutComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
   ],
  providers: [
    DataService, 
    MessageDataService,
    CommonService,
    ProductService,
    AuthService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

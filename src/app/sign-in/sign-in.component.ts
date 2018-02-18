import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from "angular5-social-login";
import {
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';
 
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @Output()
  close = new EventEmitter<string>();

  constructor( private socialAuthService: AuthService ) {}
  ngOnInit() { }
  showSignIn($event){
    this.close.emit();
  }
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
      }
    );
  }

}

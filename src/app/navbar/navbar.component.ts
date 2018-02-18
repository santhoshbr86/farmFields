import { Component, OnInit } from '@angular/core';
import { MessageDataService } from '../data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  message: string;
  showSignInOvelay: boolean=false;
  constructor(private data: MessageDataService) { }

  ngOnInit() {
     this.data.currentMessage.subscribe(message => this.message=message);
  }
  newMessage(){
    this.data.changeMessage("This is From Navigation Component");
  }
  showSignIn(){
    this.showSignInOvelay=!this.showSignInOvelay;
    console.log('Signing In');
  }
}

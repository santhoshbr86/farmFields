import { Component } from '@angular/core';
import { DataService } from './data.service';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private data:DataService){}
  sample ='';
  samepleArray = [];
  ngOnInit(){
    this.sample=this.data.getData();
    this.samepleArray=this.data.cars;
  }
}

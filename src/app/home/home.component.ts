import { Component, OnInit ,ViewChild, AfterViewInit,} from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { MessageDataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
 parentMessage = "The Message from Parent";
 @ViewChild(CarouselComponent) child;
 message: string;
 constructor(private data: MessageDataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message=message);
  }
  ngAfterViewInit(){
    this.message = this.child.message;
  }
  reciveMessage($event){
    this.message = $event;
  }
}

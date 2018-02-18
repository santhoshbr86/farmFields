import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() childMessage: String;
  message :string ="Intialization";
  messageway2: string = "Click message event exchange";
  isAvailable=false;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendMessage(){
    this.isAvailable=!this.isAvailable;
    this.messageEvent.emit(this.messageway2);  
  }
}

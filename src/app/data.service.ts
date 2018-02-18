import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  constructor() { }
  cars = ['xuv', 'audi', 'bmw','ford'];
  getData(){
    return 'Returning data here';
  }

}
@Injectable()
export class MessageDataService {
  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();
  constructor(){

  }
  changeMessage(message:string){
    this.messageSource.next(message);
  }
}
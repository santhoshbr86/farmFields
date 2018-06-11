import { Component, OnInit } from '@angular/core';  
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from '../common.service';  
   
import {Http,Response, Headers, RequestOptions } from '@angular/http';  

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.css']
})
export class ExampleComponentComponent implements OnInit {
  constructor(private newService :CommonService,) {   }  
   Repdata;  
   valbutton ="Save";  
     
ngOnInit() {    
  this.newService.GetUser().subscribe(data =>  this.Repdata = data)  
}  
  
onSave = function(userForm,user,isValid: boolean) {    
 user.mode= this.valbutton;  
 if(userForm.valid){
  this.newService.saveUser(user)  
  .subscribe(data =>  { 
     alert(data.data); 
     userForm.reset(); 
     this.ngOnInit();    
  }   
  , error => this.errorMessage = error )  
  }
}      
edit = function(kk) {  
this.id = kk._id;  
this.name= kk.name;  
this.address= kk.address;  
this.email = kk.email;
this.phone = kk.phone;
this.valbutton ="Update";  
}  
  
delete = function(id) {  
this.newService.deleteUser(id)  
.subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
}  
}

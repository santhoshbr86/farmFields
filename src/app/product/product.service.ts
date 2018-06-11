import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  

@Injectable()
export class ProductService {

  constructor(private http: Http) { }
  saveProduct(user){
    return this.http.post('http://localhost:8080/product/saveProduct/',user)
    .map((res: Response) =>{ console.log(res)
      return res.json()});
  }
  getProducts(){
    return this.http.get('http://localhost:8080/product/getProducts/').
    map((res:Response) => res.json())
  }
}

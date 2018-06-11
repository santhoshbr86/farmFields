import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import { ProductService } from '../product/product.service';
import { Product } from '../const';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products;
  product:Product;
  buttonValue='Save';
  constructor(private pService:ProductService) { }

  ngOnInit() {
    this.pService.getProducts().subscribe(data =>{
      console.log(data) ;
      this.products=data
    }
    );

  }
  saveProduct(addProduct, productDetails){
    productDetails.mode=this.buttonValue;
    if(addProduct.valid){
      this.pService.saveProduct(productDetails).
      subscribe(res => {
         alert(res.data);
         this.ngOnInit();    
      })
    }
  }

  edit(product){
    this.product.name = product.name;
    this.product.category = product.category;
    this.product.date = product.date;
    this.product.cost = product.cost;
  }
}

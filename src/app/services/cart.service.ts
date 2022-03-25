import { Product } from "../components/product-category/products/product.model";
// import {HttpClient} from "@angular/core/http";
import {Observable, Subject} from 'rxjs';
import {Injectable} from "@angular/core";

import {cartItem} from '../models/cart-item';
@Injectable({
  providedIn:'root'
})
export class CartService{
  subject = new Subject()
  constructor(){}

  sendMsg(product:any) {
    // console.log(product);
    this.subject.next(product) //Triggering an event
  }
  getMsg(){
    return this.subject.asObservable()
  }
}

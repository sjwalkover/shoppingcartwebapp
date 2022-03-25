import { Product } from "../components/product-category/products/product.model";
// import {HttpClient} from "@angular/core/http";
import { Subject} from 'rxjs';
import {Injectable} from "@angular/core";

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
  deleteMsg(product:any){
    this.subject.next(product)
  }
  getMsg(){
    return this.subject.asObservable()
  }
}

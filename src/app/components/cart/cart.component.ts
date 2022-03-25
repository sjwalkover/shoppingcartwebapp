import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../product-category/products/product.model';
import { cartItem } from '../../models/cart-item'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // 1. Explicitly declare the type
  cartItems: cartItem[] = [];

  cartTotal = 0;
  constructor(private msg: CartService) { }

  ngOnInit(){

  this.msg.getMsg().subscribe((data: any)=>{
    // console.log(data);
   this.addProductToCart(data)
  })
}
addProductToCart(product:Product) {
  let productsExists = false
  for(let i in this.cartItems){
    if(this.cartItems[i].productId === product.id){
      this.cartItems[i].qty++
      productsExists = true
      break;
    }
}


  if(!productsExists) {
    this.cartItems.push({
      id:product.id,
          productId:product.id,
          productName:product.name,
          qty:1,
          price:product.price
      })
  }



  this.cartTotal = 0
  this.cartItems.forEach(item => {
    this.cartTotal += (item.qty * item.price)
  })
}
}

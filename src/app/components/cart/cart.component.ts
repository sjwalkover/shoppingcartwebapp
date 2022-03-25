import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { TransferService } from 'src/app/services/transfer.service';
import { Product } from '../product-category/products/product.model';
import { cartItem } from '../../models/cart-item'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [
    {productId:1,productName:'Test1',qty:0,price:100},
    // {id:2,productId:4,productName:'Test2',qty:2,price:50},
    // {id:3,productId:3,productName:'Test3',qty:2,price:200},
    // {id:4,productId:2,productName:'Test4',qty:2,price:100}
  ];
  // public : cartItem[];
  cartTotal = 0;
  constructor(private msg: TransferService) { }

  ngOnInit(){

  this.msg.getMsg().subscribe((data: any)=>{
    console.log(data);
   this.addProductToCart(data)
  })
}
addProductToCart(product:Product) {
  let productsExists = false
  if(!productsExists) {
    this.cartItems.push({
          productId:product.id,
          productName:product.name,
          qty:1,
          price:product.price
      })
  }
  else{
  for(let i in this.cartItems){
        if(this.cartItems[i].productId === product.id){
          this.cartItems[i].qty++
          productsExists = true
          break;
        }

  }

  }


  this.cartTotal = 0
  this.cartItems.forEach(item => {
    this.cartTotal += (item.qty * item.price)
  })
}
}

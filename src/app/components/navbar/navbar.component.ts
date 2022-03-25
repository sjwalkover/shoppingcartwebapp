import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../product-category/products/product.model';
import { cartItem } from '../../models/cart-item'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItems: cartItem[] = [];
  cartqty = 0;
  constructor( private msg: CartService) {}

  ngOnInit(): void {
    this.msg.getMsg().subscribe((data: any)=>{
      // console.log(data);
     this.addProductToCart(data)
    })
  }
  addProductToCart(product:Product) {
    let productsExists = false
    console.log(this.cartItems.length);
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





      this.cartqty = this.cartItems.length;

}

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}

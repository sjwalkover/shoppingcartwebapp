import { Component, OnInit ,Input} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../../product.model';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: Product
  constructor(private msg:CartService) { }

  ngOnInit(): void {
  }
   AddToCart(){
     this.msg.sendMsg(this.productItem)
   }
   RemoveToCart(){
    this.msg.deleteMsg(this.productItem)
   }
}

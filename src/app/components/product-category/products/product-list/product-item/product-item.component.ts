import { Component, OnInit ,Input} from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';
import { Product } from '../../product.model';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: Product
  constructor(private msg:TransferService) { }

  ngOnInit(): void {
  }
   AddToCart(){
     this.msg.sendMsg(this.productItem)
   }
}

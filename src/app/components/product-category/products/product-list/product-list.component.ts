import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/product-category/products/products.service';
import { Product } from 'src/app/components/product-category/products/product.model'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []
  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
   this.productList = this.ProductService.getProducts()
  }

}

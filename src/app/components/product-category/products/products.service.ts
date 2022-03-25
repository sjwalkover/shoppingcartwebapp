import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product} from './product.model';


  @Injectable({
    providedIn:'root'
  }

  )
  export class ProductService {
    products = [
    {id: 1, name: 'Adidas Stan Smith', price: 1000.0,  description: 'very good shoes',imagePath:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    {id: 2, name: 'Nike Air Max', price: 300.0,  description: 'very good shoes',imagePath:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    {id: 3, name: 'Nike Air Max', price: 200.0,  description: 'good shoes',imagePath:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    {id: 4, name: 'Nike Air Max', price: 130.0,  description: 'puma shoes',imagePath:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    {id: 5, name: 'Reebok Sweat Shirt', price: 45.0, category: 'Clothes', description: '',imagePath:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    {id: 6, name: 'Puma T-Shirt', price: 30.0,  description: 'branded clothes',imagePath:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    {id: 7, name: 'Puma T-Shirt', price: 30.0,  description:  'branded clothes',imagePath:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    {id: 8, name: 'Puma T-Shirt', price: 30.0,   description: 'branded clothes',imagePath:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    {id: 9, name: 'Puma T-Shirt', price: 30.0,   description: 'branded clothes',imagePath:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    {id: 10, name: 'Puma ', price: 30.0,  description: 'Branded clothes',imagePath:'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='},
    {id: 12, name: 'rolex', price: 100.0,  description: 'Branded Watches',imagePath:'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'},
    {id: 13, name: 'rolex', price: 300.0,  description: 'Branded Watches',imagePath:'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'},
    {id: 14, name: 'rolex', price: 300.0,  description: 'Branded Watches',imagePath:'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'},
    {id: 15, name: 'rolex', price: 500.0,  description: 'Branded Watches',imagePath:'https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'},
  ];
    productChanged = new Subject<Product[]>();
    getProducts():Product[]{
      return this.products;
    }
    constructor() { }
    sendMsg(){

    }
    getMsg(){

    }
  }

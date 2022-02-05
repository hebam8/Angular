import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor() {}

  productss = [
    { ID: 1, name: 'product1', price: 50 },
    { ID: 2, name: 'product2', price: 60 },
    { ID: 3, name: 'product1', price: 80 },
    { ID: 4, name: 'product1', price: 90 },
  ];
  GetAllProducts() {
    return this.productss;
  }
  //   GetProductById(prdId: any) {

  // }
}

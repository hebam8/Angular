import { Component, OnInit } from '@angular/core';
import {
  DiscountOffers,
  ICategory,
  IProduct,
} from '../shared classes and types/interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  Discount: DiscountOffers;
  Storename: string;
  StoreLogo: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  ClientName: string;
  IsPurshased: boolean;
  showTable: boolean = false;

  constructor() {
    (this.Discount = DiscountOffers.sale2),
      (this.CategoryList = [
        { ID: 2, Name: 'category1' },
        { ID: 2, Name: 'category2' },
      ]),
      (this.ProductList = [
        {
          ID: 3,
          Name: 'mansour',
          Quantity: 33,
          Price: 188,
          img: 'oregj',
        },
      ]);
    (this.Storename = 'Hamada'),
      (this.StoreLogo = '../../assets/img2.jpg'),
      (this.ClientName = 'Heba'),
      (this.IsPurshased = true);
  }

  message = '';
  IsPurshasedd: boolean = false;
  show() {
    this.IsPurshasedd = !this.IsPurshasedd;
    this.message =
      'Thanks for purchasing from our Store' + ' ' + this.ClientName;
  }
  dataUserEntered = 'defult data';
  img: string = '';
  ngOnInit(): void {}
}

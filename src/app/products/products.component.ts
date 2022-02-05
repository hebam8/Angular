import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
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
  ProductList: any;
  CategoryList: ICategory[];
  ClientName: string;
  IsPurshased: boolean;
  showTable: boolean = false;

  constructor(private productserviceservice: ProductServiceService) {
    (this.Discount = DiscountOffers.sale2),
      (this.CategoryList = [
        { ID: 2, Name: 'category1' },
        { ID: 2, Name: 'category2' },
      ]),
      (this.ProductList = this.renderValues());
    (this.Storename = 'Hamada'),
      (this.StoreLogo = '../../assets/img2.jpg'),
      (this.ClientName = 'Heba'),
      (this.IsPurshased = true);
  }

  renderValues() {
    return (this.ProductList = this.productserviceservice.GetAllProducts());
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

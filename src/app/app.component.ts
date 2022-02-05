import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'day1-ng';
  @ViewChild(ProductsComponent) child!: ProductsComponent;
  display() {
    this.child.show();
  }
}

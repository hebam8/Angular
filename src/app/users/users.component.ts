import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private productserviceservice: ProductServiceService) {}

  userDataList: any;
  errorMsg: any;
  ngOnInit(): void {
    this.productserviceservice.GetALLUesrData().subscribe(
      (userData) => {
        this.userDataList = userData;
      },
      (error) => {
        this.errorMsg = error;
      }
    );
  }
}

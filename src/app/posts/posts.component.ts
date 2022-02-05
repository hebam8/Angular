import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private productserviceservice: ProductServiceService) {}
  postsData: any;
  errorMSG: any;
  ngOnInit(): void {
    this.productserviceservice.GetALLPostes().subscribe(
      (data) => {
        this.postsData = data;
      },
      (error) => {
        this.errorMSG = error;
      }
    );
  }
}

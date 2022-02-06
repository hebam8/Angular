import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  constructor(
    private producteserviceservice: ProductServiceService,
    private router: Router
  ) {}
  postsData: any;
  errorMSG: any;
  ngOnInit(): void {
    this.producteserviceservice.GetALLPostes().subscribe(
      (data: any) => {
        this.postsData = data;
      },
      (error: any) => {
        this.errorMSG = error;
      }
    );
  }
  depId: any;
  goToPosts() {
    this.router.navigate(['Postes', { id: this.depId }]);
  }
}

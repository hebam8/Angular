import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IComment } from 'src/assets/Data/IComment';
import { IPost } from 'src/assets/Data/IPost';
import { IUser } from 'src/assets/Data/IUser';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  productss = [
    { ID: 1, name: 'product1', Quantity: 40, price: 50 },
    { ID: 2, name: 'product2', Quantity: 70, price: 60 },
    { ID: 3, name: 'product1', Quantity: 80, price: 80 },
    { ID: 4, name: 'product1', Quantity: 90, price: 90 },
  ];
  GetAllProducts() {
    return this.productss;
  }
  __url: string = 'https://jsonplaceholder.typicode.com/users';
  GetALLUesrData(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.__url).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server error');
      })
    );
  }
  url2: string = 'https://jsonplaceholder.typicode.com/posts';

  GetALLPostes(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url2).pipe(
      catchError((error) => {
        return throwError(error.message || 'error');
      })
    );
  }
  __ul3: string = 'https://jsonplaceholder.typicode.com/comments';
  GetAllComment(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.__ul3).pipe(
      catchError((error) => {
        return throwError(error.message || 'error');
      })
    );
  }

  GetProductById(prdId: any): any {
    if (typeof prdId != 'number') return null;
    else {
      for (let i of this.productss) {
        if (i.ID === prdId) return i;
        else return null;
      }
    }
  }
}

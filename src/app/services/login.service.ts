import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  ___url = 'http://localhost:3000/login';
  loginUser(loginn: Login) {
    return this.http.post(this.___url, loginn);
  }
}

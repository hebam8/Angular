import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from 'src/register';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  constructor(private http: HttpClient) {}
  _url = 'http://localhost:3000/enroll';
  enroll(register: Register) {
    return this.http.post(this._url, register);
  }
}

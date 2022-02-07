import { Component, OnInit } from '@angular/core';
import { Login } from 'src/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private login: LoginService) {}
  loginModel: Login = new Login('', '');
  ngOnInit(): void {}

  onSubmitt() {
    console.log(this.loginModel);
    this.login.loginUser(this.loginModel).subscribe(
      (res) => {
        console.log('success', res);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}

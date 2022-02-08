import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private login: LoginService, private fb:FormBuilder) {}
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

  loginForm=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }
}

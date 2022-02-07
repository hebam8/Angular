import { Component, OnInit } from '@angular/core';
import { Register } from 'src/register';
import { EnrollmentService } from '../services/enrollment.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private enrollment: EnrollmentService) {}
  topics = ['facebook', 'twitter', 'google'];
  registerModel: Register = new Register('', '', '', '', '');

  onSubmit() {
    console.log(this.registerModel);
    this.enrollment.enroll(this.registerModel).subscribe(
      (res) => {
        console.log('success', res);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  ngOnInit(): void {}
}

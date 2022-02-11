import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from 'src/register';
import { confirmPasswordValidator } from '../confirmPassword.validator';
import { EnrollmentService } from '../services/enrollment.service';
import { forbiddenNameValidator } from '../userName.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private enrollment: EnrollmentService, private fb:FormBuilder) {}
  topics = ['facebook', 'twitter', 'google'];
  registerModel: Register = new Register('', '', '', '', '');

  onSubmit() {
    console.log(this.registerModel);
    this.enrollment.enroll(this.registerModel).subscribe(res=> {
        console.log('success', res);
      },
      error => {
        console.log('error', error);
      }
    );
  }

registrationForm=this.fb.group({
  userName:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/admin/)]],
  email:['',Validators.required],
  password:[''],
  confirmPassword:[''],
  subscribe:[false],
  number:[''],
  alternativeComment:this.fb.array([]),
  topics:['',Validators.required]
},{validator:[confirmPasswordValidator]})

  ngOnInit(): void {}

  loadAPIData(){
    this.registrationForm.patchValue({
      userName:'Heba',
      email:'hebam1017@gmail.com'
    })
  }


   get alternativeComment(){
     return this.registrationForm.get('alternativeComment') as FormArray;
   }

   addAlternativeComment(){
     this.alternativeComment.push(this.fb.control(""))
   }
  get userName(){
    return this.registrationForm.get('userName')
  }
  
  get email(){
    return this.registrationForm.get('email')
  }
  get topicss(){
    return this.registrationForm.get('topics')
  }
  get number(){
    return this.registrationForm.get('number')
  }

  setNumberValidation(){
    this.registrationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
        if(checkedValue){
          this.number?.setValidators(Validators.required)
        }
        else{
          this.number?.clearValidators();
        }
        this.number?.updateValueAndValidity();
    })
  }
}

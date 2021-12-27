import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister:FormGroup=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    phoneNumber: new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
   roleId:new FormControl('')

  
  }
  )




  constructor(public fb:FormBuilder,public home:HomeService,private router:Router)  {


  }
  ngOnInit(): void {
//     this.registerform=new FormGroup({
// username:new FormControl(null,Validators.required),
// password:new FormControl(null,Validators.required),
// email:new FormControl(null,Validators.required),
// firstname:new FormControl(null,Validators.required),



    
  }



  submit() {
    console.log(this.formRegister.value);
    const formValue=this.formRegister.value;
    formValue.userName=this.formRegister.value.userName.toString();
    formValue.phonNumber=this.formRegister.value.phoneNumber.toString();
    formValue.email=this.formRegister.value.email;
    formValue.passWord=this.formRegister.value.password.toString();
    formValue.roleId=5
    setTimeout(() => {
      //  this.router.navigate(['Login']);
        //this.sp.hide();
      }, 3000);
  
      this.home.create(formValue);
      this.router.navigate(['home/login'])
     }




}

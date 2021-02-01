import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private resto:RestoService) { }
 alert:boolean=false
  loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }
collect(){
this.resto.LoginUser(this.loginForm.value).subscribe((result)=>{
  console.log(result)
  this.alert=true
})
}
closeAlert(){
  this.alert=false;
}
}

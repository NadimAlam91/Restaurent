import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private resto:RestoService) { }
  alert:boolean=false
  addRagister = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }
collect(){
  console.log(this.addRagister.value)
  this.resto.userRagister(this.addRagister.value).subscribe((result)=>{
     console.log(result)
     this.alert=true
  })
}
closeAlert(){
  this.alert=false
}
}

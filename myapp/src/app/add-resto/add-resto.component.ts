import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
 
  constructor(private resto:RestoService) { }
  alert:boolean=false
  addResto=new FormGroup({
    name:new FormControl('',Validators.required),
    address:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    email:new FormControl('',Validators.required)
  })

  get name() { return this.addResto.get('name'); }
  get address() { return this.addResto.get('addresss'); }
  get email() { return this.addResto.get('email'); }
  ngOnInit(): void {
  }
collectResto(){
  this.resto.saveResto(this.addResto.value).subscribe((result:any)=>{
    console.log(result)
    this.alert=true;
  })
  this.addResto.reset({});
}
closeAlert(){
  this.alert=false
}
}

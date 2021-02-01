import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service'
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
   data:any=[]
  constructor(private resto:RestoService) { }

  ngOnInit(): void {
 this.resto.getList().subscribe((result)=>{
      console.log(result);
      this.data=result;
 });
  }
deleteResto(item:any){
  this.data.splice(item-1,1);
  console.log(this.data);
  this.resto.deleteResto(item).subscribe((result)=>{
    console.log(result);
  })

}
updateResto(){
  
}
}

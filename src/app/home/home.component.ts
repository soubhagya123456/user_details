import { Component, OnInit } from '@angular/core';
import { MyapiService } from '../myapi.service';
import { database } from '../database';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  regForm:FormGroup;
  listdata:any[]=[];
  p: number = 1;
  usedata:any[]=[];
  constructor(private mydata : MyapiService,private formbuilder: FormBuilder) {
    this.regForm=formbuilder.group({
      id:new FormControl(),
      name:new FormControl(),
      email:new FormControl(),
      gender:new FormControl(),
      status:new FormControl(),
    })
   }
         
  ngOnInit(): void {
    this.mydata.getnewdata()
    .subscribe(
  
       data=>
       {
         //debugger;
         //console.warn("data", data);
        this.listdata = data.data;
       // console.log(this.listdata);
      }
    );
   
   
  }
  // someFunction(data:any){
  //   localStorage.setItem("singleuser",JSON.stringify(data));
  //   console.log(data);
  // }
   
  onSubmit(regForm:any) {
  console.log(this.regForm.value);
  this.usedata=this.regForm.value;
  console.log(this.usedata);
  this.listdata.push(this.usedata);
}

}

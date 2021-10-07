import { database } from './../database';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyapiService } from '../myapi.service';
//import { onedata } from '../database';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  userdata:any=[];
   // dataarr:onedata[]=[];
    
    id:any;
    constructor( private route:ActivatedRoute,private mydata : MyapiService) { 

     
  }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id']);
    this.id=this.route.snapshot.params['id'];
   // this.getone();
  
  // const malldata=JSON.parse(localStorage.getItem('singleuser')||'{}');
  // console.log(malldata);
  // this.userdata.push(malldata);
  // console.log(this.userdata);
 
 
  
  //this.userdata= JSON.parse(localStorage.getItem('singleuser')|| '{}');
 // console.log(this.userdata);
 // this.userdata= localStorage.getItem('singleuser');
 // console.log(this.userdata);
 // this.userdata = JSON.parse(localStorage.getItem('singleuser')!);
  // console.log(pop);

  }
  
  //  getone(){
  //   this.mydata.getonedata(this.id).subscribe(xdata=>{
  //     console.log(xdata);
  //     this.dataarr=xdata.data;
      


  //     this.userdata=[]
  //             // console.log(xdata);
  //              this.userdata.push(this.dataarr);
  //              console.log(this.userdata);
  //   })
  // }

}

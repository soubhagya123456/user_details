import { Component, OnInit } from '@angular/core';
import { database } from './../database';
import { ActivatedRoute } from '@angular/router';
import { MyapiService } from '../myapi.service';
@Component({
  selector: 'app-oneuser',
  templateUrl: './oneuser.component.html',
  styleUrls: ['./oneuser.component.css']
})
export class OneuserComponent implements OnInit {
  userdata:database[]=[];
  newdata:any=[];
  id:any;
  newusers:any;
  gunudata:any | undefined;
  constructor(private route:ActivatedRoute,private mydata : MyapiService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getone();
  }


  getone(){
    this.mydata.getsingleuser(this.id).subscribe((xdata:any)=>{
      //console.log(xdata);
      this.gunudata=xdata.data;
      // this.newdata=xdata.data;
      // console.log(this.newdata);
      // this.userdata.push(this.newdata);
      // console.log(this.userdata);

      // let newusers=this.userdata.map((user)=>{
      //   return {id: user.id , name:user.name,
      //   email:user.email,gender:user.gender,status:user.status} 

      //  })
      //   console.log(newusers);
      // this.userdata=[]
      //         // console.log(xdata);
      //          this.userdata.push(this.dataarr);
      //          console.log(this.userdata);
    })
  }

}

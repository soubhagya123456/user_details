import { Component, OnInit } from '@angular/core';
import { MyapiService } from '../myapi.service';
//import { onedata } from '../database';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //singleuser:onedata[]=[];;
  constructor(private mydata : MyapiService) { }

  ngOnInit(): void {
    // this.mydata.getfulldata()
    // .subscribe(
  
    //    data=>
    //    {
         
    //     this.singleuser = data.data;
    //     //console.log(this.singleuser);
    //   }
    // );
  }

}

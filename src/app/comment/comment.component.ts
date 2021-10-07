import { Component, OnInit } from '@angular/core';
import { MyapiService } from '../myapi.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
    commentdata:any;
  constructor(private mydata : MyapiService) { }

  ngOnInit(): void {
    this.mydata.commentdata()
    .subscribe(
  
       (data:any)=>
       {
        
         //console.warn("data", data);
        this.commentdata = data.data;
        console.log(this.commentdata);
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { MyapiService } from '../myapi.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    tododata:any;
 // id:any;

  constructor(private mydata : MyapiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params['id']);
    //this.id=this.route.snapshot.params['id'];
    //this.todoone;
    this.mydata.tododata()
    .subscribe(
  
       (data:any)=>
       {
        
         //console.warn("data", data);
        this.tododata = data.data;
        console.log(this.tododata);
      }
    );
  }


  
   


}

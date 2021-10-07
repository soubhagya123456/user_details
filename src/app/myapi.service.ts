import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class MyapiService {

  constructor(private httpclient:HttpClient) { }

  getnewdata():Observable<any>{
    return this.httpclient.get("https://gorest.co.in/public/v1/users");
  }


   commentdata():Observable<any>{
    return this.httpclient.get("https://gorest.co.in/public/v1/comments");

   }
  getsingleuser(id:number){
    return this.httpclient.get("https://gorest.co.in/public/v1/users/"+id).pipe(map(res =>{
    return res
  }
    ));
   }

   tododata(){
    return this.httpclient.get("https://gorest.co.in/public/v1/todos").pipe(map(pop =>{
      return pop
    }
      ));

   }


  // getfulldata(){
  //   return this.httpclient.get("http://dummy.restapiexample.com/api/v1/employees").pipe(map((res:any) => res));


    

  // }

  //  getonedata(id:number){
  //    return this.httpclient.get("http://dummy.restapiexample.com/api/v1/employee/"+id).pipe(map((res:any) => res));
  //   }
}

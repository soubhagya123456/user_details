import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyapiService } from './myapi.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HomeComponent } from './home/home.component';
//import { NgxPaginationModule } from 'ngx-pagination';
import {NgxPaginationModule} from 'ngx-pagination';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OneuserComponent } from './oneuser/oneuser.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CommentComponent } from './comment/comment.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    HomeComponent,
    DashboardComponent,
    OneuserComponent,
    TodoListComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   NgxPaginationModule,
   ReactiveFormsModule,
   FormsModule
  ],
  providers: [MyapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

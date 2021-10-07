import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 
 import { OneuserComponent } from './oneuser/oneuser.component'; 
 import { TodoListComponent } from './todo-list/todo-list.component'; 
 import { CommentComponent } from './comment/comment.component'; 

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'user',component: UserdetailsComponent},
  {path:'dash',component: DashboardComponent},
  {path:'one/:id',component: OneuserComponent},
  {path:'todo',component: TodoListComponent},
  {path:'cmnt',component: CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

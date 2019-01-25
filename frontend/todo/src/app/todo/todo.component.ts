import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

id:number
todo: Todo

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private todoService : TodoDataService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(this.id,'',false,new Date)
    if(this.id!=-1){
      this.todoService.retriveTodo('username',this.id).subscribe(
        data => this.todo = data,
        error => console.log(error.error.message) 
      )
    }
  }

  saveTodo(){
    if(this.id==-1){
      this.todoService.createTodo('username',this.todo).subscribe(
        data => {
          this.router.navigate(["todos"])
          console.log(data)},
        error => console.log(error.error.message) 
      )
    }else{
      this.todoService.updateTodo('username',this.id,this.todo).subscribe(
        data => {
          this.router.navigate(["todos"])
          console.log(data)},
        error => console.log(error.error.message) 
      )
    }
  }

  backToList(){
    this.router.navigate(["todos"])
  }

}

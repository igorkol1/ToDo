import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]

  message: string

  constructor(
    private todoService:TodoDataService,
    private router:Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit() {
    this.refreshTodos()
  }

  deleteTodo(id:number){
    this.todoService.deleteTodo(this.basicAuthenticationService.getAuthenticatedUser(),id).subscribe(
      response => {
        console.log(response)
        this.refreshTodos()
        this.message = "Todo removed"
        
      }
    )
  }

  updateTodo(id:number){
    this.router.navigate(['todos',id])
  }

  refreshTodos(){
      this.todoService.retriveAllTodos(this.basicAuthenticationService.getAuthenticatedUser()).subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }

}

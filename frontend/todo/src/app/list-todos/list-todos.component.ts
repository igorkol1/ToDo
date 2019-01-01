import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public completed: boolean,
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

  constructor(
    private todoService:TodoDataService
  ) { }

  ngOnInit() {
    this.todoService.retriveAllTodos('username').subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }

}

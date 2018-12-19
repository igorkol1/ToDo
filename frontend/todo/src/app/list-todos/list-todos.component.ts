import { Component, OnInit } from '@angular/core';

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

  todos = [
    new Todo(1,'Learn Angular',false,new Date()),
    new Todo(2,'Learn Spring',false,new Date()),
    new Todo(3,'Custom application',false,new Date()),
  ]

  // todo = {
  //   id : 1,
  //   description: "Learn to dance"
  // }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "testUserName"
  password = "testPassword"

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username)
    console.log(this.password)
  }

}

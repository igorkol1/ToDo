import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "testUserName"
  password = "testPassword"
  errorMessage = "Invalid credentials"
  invalidLogin : boolean = false

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin(){
    // console.log(this.username)
    // console.log(this.password)
    if(this.username==="username" && this.password==="password"){
      this.invalidLogin=false
      this.router.navigate(['welcome',this.username])
    }else{
      this.invalidLogin=true
    }
    console.log(this.invalidLogin)
  }

}

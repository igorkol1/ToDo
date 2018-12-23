import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

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

  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.invalidLogin=false
      this.router.navigate(['welcome',this.username])
    }else{
      this.invalidLogin=true
    }
  }

}

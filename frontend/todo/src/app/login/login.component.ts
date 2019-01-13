import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String
  password: String
  errorMessage = "Invalid credentials"
  invalidLogin : boolean = false

  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private basicAuthenticationService : BasicAuthenticationService) { }

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

  handleBasicLogin(){
    this.basicAuthenticationService.executeAuthenticationService(this.username,this.password)
    .subscribe(
      data => {
        console.log(data)
        this.invalidLogin=false
        this.router.navigate(['welcome',this.username])
      },
      error => {
        console.log(error.error.errorMessage)
        this.invalidLogin=true
      }
    )
  }

}

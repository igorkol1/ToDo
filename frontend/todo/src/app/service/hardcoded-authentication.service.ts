import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    console.log(this.isUserLoggedIn())
    if(username==="username" && password==="password"){
      sessionStorage.setItem('authenticaterUser',username);
      console.log(this.isUserLoggedIn())
      return true
    }
    return false
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }
}

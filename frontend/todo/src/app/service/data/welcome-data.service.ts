import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public messsage:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWordBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
  }

  executeHelloWordBeanServiceWithPathVariable(name){
    let basicAuthHttpHeader = this.createBasicAuthHttpHeader()
    let header = new HttpHeaders({
      Authorization:basicAuthHttpHeader
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,{
      headers : header
    })
  }

  createBasicAuthHttpHeader(){
    let username = "user123"
    let password = "password123"
    let basicAuthHttpHeader = 'Basic '+window.btoa(username+':'+password);
    return basicAuthHttpHeader;
  }
}

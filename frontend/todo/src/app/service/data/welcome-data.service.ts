import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constans';

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
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`)
  }

  executeHelloWordBeanServiceWithPathVariable(name){

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`,{
      //headers : header
    })
  }
}

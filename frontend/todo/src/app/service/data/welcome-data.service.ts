import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor() { }

  executeHelloWordBeanService(){
    console.log("Execute Hello Word Bean Service")
  }
}

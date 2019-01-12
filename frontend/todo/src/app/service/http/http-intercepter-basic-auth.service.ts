import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let username = "user123"
    let password = "password123"
    let basicAuthHttpHeader = 'Basic '+window.btoa(username+':'+password);

    request = request.clone({
      setHeaders : {
          Authorization:basicAuthHttpHeader
        }
      })
    
    return next.handle(request);
  }
  
}

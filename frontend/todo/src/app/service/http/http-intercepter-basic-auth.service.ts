import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let basicAuthHttpHeader = this.basicAuthenticationService.getAuthenticatedToken()
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    if(basicAuthHttpHeader && username){
      request = request.clone({
        setHeaders : {
            Authorization:basicAuthHttpHeader
          }
        })
    }
    return next.handle(request);
  }
  
}

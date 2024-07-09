import { HTTP_INTERCEPTORS, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
// import { TokenService } from "../services/token.service";
import { Observable } from "rxjs";
import { inject } from '@angular/core';
import { TokenService } from "./service/token.service";


const TOKEN_HEADER_KEY = 'Authorization'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  tokenService  = inject(TokenService)
  authToken = this.tokenService.getToken()

    constructor( ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
      if (req.body) {
        req = req.clone({ 
          setHeaders: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.authToken}`,
            // x_access_token: this.authToken 
        
           } });
        console.log("From Auth int", req)
      }
      return next.handle(req);
    }
    }


export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
]

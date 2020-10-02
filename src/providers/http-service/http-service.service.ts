import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import {config} from '../../shared/config';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
public headers: any;
public options: any;
public headers_object: any;

  constructor(public http: HttpClient) {
  }

initHeaders(action) {
this.headers_object = new HttpHeaders();
  this.headers_object = this.headers_object.append('x-api-key', '1848b5465b1449d78d10c2991b1bea98');
  // this.headers_object = this.headers_object.append('Access-Control-Allow-Origin', '*');
  // this.headers_object = this.headers_object.append('Content-Type', 'application/json');
  this.options = {
    headers: this.headers_object,
  };
}

sendRequest(action: string , body: any) {
this.initHeaders(action);
return this.http.post(config['baseURL']  + action , body, this.options).pipe(
  catchError(this.handleError)
);
}

getRequest(action: string) {
  this.initHeaders(action);
  return this.http.get(config['baseURL']  + action , this.options).pipe(
   catchError(this.handleError)
);
}


private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    error.error.error_description);
}
}


import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
// import { map } from "rxjs/operators";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain = 'http://localhost:3000';
  constructor(private http: Http) { }

  registerUser(user) {
    return this.http.post(this.domain + '/authentication/register', user).pipe(map(res => res.json()));
  }

  checkUsername(username) {
    return this.http.get(this.domain + '/authentication/checkUsername/' + username).pipe(map(res => res.json()));
  }

  checkEmail(email) {
    return this.http.get(this.domain + '/authentication/checkEmail/' + email).pipe(map(res => res.json()));
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) {
  }
  
  public save(users: User): Observable<Object> {
    return this.http.post('http://localhost:8080/users/save', users);
  }
  public login(message: any): Observable<Object> {
    return this.http.post('http://localhost:8080/users/login', message);
  }
  currentState:boolean;;

}

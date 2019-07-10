import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "./User";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:9000';
  constructor(private http: HttpClient) { }

  addUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addUser`, user);
  }

  viewUser(): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/viewUser`);
  }

  getUserById(id: number) {
    
    return this.http.get<User>(this.baseUrl + '/editUser/' + id);
  }

  updateUser(user: User): Observable<Object> {
    
      return this.http.put(`${this.baseUrl}/updateUser`, user);
    }
  
    deleteUser(id: number) : Observable<Object> {
      return this.http.delete(`${this.baseUrl}/deleteUser/` + id);
      
    }
}

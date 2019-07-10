import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from "./Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:9000';
  constructor(private http: HttpClient) { }

  addTask(task: Object): Observable<Object> {
    alert("In add task");
    return this.http.post(`${this.baseUrl}/addTask`, task);
    
  }

  viewTask(projectId:number): Observable<any> {
    alert(projectId);
    return this.http.get(`${this.baseUrl}/viewTask/`+projectId);
  }

  getTaskById(id: number) {
    
    return this.http.get<Task>(this.baseUrl + '/editTask/' + id);
  }

  updateTask(task: Task): Observable<Object> {
  
    return this.http.put(`${this.baseUrl}/updateTask`, task);
  }

  endTask(id: number) : Observable<Object> {
    return this.http.delete(`${this.baseUrl}/endTask/` + id);
    
  }
}
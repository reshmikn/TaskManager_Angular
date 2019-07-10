import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from "./Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = 'http://localhost:9000';
  constructor(private http: HttpClient) { }

  addProject(project: Object): Observable<Object> {
    
    return this.http.post(`${this.baseUrl}/addProject`, project);
  }

  viewProject(): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/viewProject`);
  }

  getProjectById(id: number) {
    
    return this.http.get<Project>(this.baseUrl + '/editProject/' + id);
  }

  updateProject(project: Project): Observable<Object> {
    
      return this.http.put(`${this.baseUrl}/updateProject`, project);
    }
    deleteProject(id: number) : Observable<Object> {
      return this.http.delete(`${this.baseUrl}/deleteProject/` + id);
      
    }
}
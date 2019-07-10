import { Component, OnInit } from '@angular/core';
import { Task } from "./../Task";
import { TaskService } from './../task.service';
import { UserService } from './../user.service';
import { ProjectService } from './../project.service';
import { User } from "./../User";
import { Project } from "./../Project";
import { Observable } from "rxjs";
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  public users: Observable<User[]>;
  public projects: Observable<Project[]>;
  project: Project= new Project();
  task: Task = new Task();
  constructor(private taskService: TaskService, private userService : UserService, private projectService:ProjectService, private router:Router) { }

  ngOnInit() {
    this.getUserNames();
    this.getProjectNames();
  }
getUserNames (){
  this.users =this.userService.viewUser();
  }
  getProjectNames (){
   this.projects =this.projectService.viewProject();
  }

 
  save() { 
   
    alert(this.task);
       this.taskService.addTask(this.task)
    .subscribe(data => console.log(data), error => console.log(error));
    
  this.task = new Task();
  this.router.navigate(['view']);
  }

  onSubmit() {
    
    this.save();
  }
}

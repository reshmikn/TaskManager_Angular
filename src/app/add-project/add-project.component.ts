import { Component, OnInit } from '@angular/core';
import { Project } from "./../Project";
import { ProjectService } from './../Project.service';
import { UserService } from './../User.service';
import { User } from "./../User";
import { Observable } from "rxjs";
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  public users: Observable<User[]>;
  project: Project = new Project();
  constructor(private projectService: ProjectService, private userService: UserService, private router:Router) { }

  ngOnInit() {
    this.getUserNames();
  }
getUserNames (){
 this.users =this.userService.viewUser();

}
save() {
  
      this.projectService.addProject(this.project)
   .subscribe(data => console.log(data), error => console.log(error));
   
 this.project = new Project();
}
 onSubmit() {
   
   this.save();
 }

 viewProject (){
  
     this.router.navigate(['viewProject']);
}
}

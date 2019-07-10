import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProjectService } from './../project.service';
import {UserService } from './../user.service';
import { Observable } from "rxjs";
import { User } from "./../User";
import {first} from "rxjs/operators";
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  users: Observable<User[]>;
  editForm: FormGroup;
  constructor(private userService: UserService,private projectService :ProjectService, private router:Router,private formBuilder :FormBuilder) { }

  ngOnInit() {
    this.getUserNames();
    let projectId = localStorage.getItem("editProjectId");
    alert(projectId);
    if(!projectId) {
      alert("Invalid action.")
      this.router.navigate(['view-project']);
      return;
  }

  this.editForm = this.formBuilder.group({
    projectId:[],
    projectName: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate:['', Validators.required],
    priority:['', Validators.required],
    userId:['',Validators.required],
    users:[]
   
  });
  this.projectService.getProjectById(+projectId)
    .subscribe( data => {
      this.editForm.setValue(data);
    });
    
  }
  getUserNames (){
    this.users =this.userService.viewUser();
    alert(this.users);
  }
  
  onSubmit() {
    this.projectService.updateProject(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['viewProject']);
        },
        error => {
          alert(error);
        });
}
}
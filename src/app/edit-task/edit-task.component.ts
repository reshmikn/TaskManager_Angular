import { Component, OnInit } from '@angular/core';
import { Task } from "./../Task";
import { TaskService } from './../task.service';
import { Observable } from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  tasks: Observable<Task[]>;
  editForm: FormGroup;
  constructor(private taskService: TaskService, private router :Router, 
    private formBuilder :FormBuilder) { }

  ngOnInit() {
    let taskId = localStorage.getItem("editTaskId");
    alert(taskId);
    if(!taskId) {
      alert("Invalid action.")
      this.router.navigate(['view-task']);
      return;
  } 
  this.editForm = this.formBuilder.group({
    taskId:[],
    task: ['', Validators.required],
    priority: ['', Validators.required],
    parentTask:['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required]
  });
  this.taskService.getTaskById(+taskId)
    .subscribe( data => {
      this.editForm.setValue(data);
    });
  }
    onSubmit() {
      this.taskService.updateTask(this.editForm.value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['view']);
          },
          error => {
            alert(error);
          });
    }
    cancelUpdate() {
      this.router.navigate(['view']);
    }

}

import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Task } from "./../Task";
import { TaskService } from './../task.service';
import { ProjectService } from './../project.service';
import { Observable } from "rxjs";
import {Router} from "@angular/router";
import { Project } from "./../Project";
import { MatTableDataSource,MatSort } from '@angular/material';
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit,AfterViewInit {
  select: FormControl;
  projects :Observable<Project[]>;
  project: Project= new Project();
  task:Task=new Task();
  tasks: Observable<Task[]>;
 
  public displayedColumns = ['task','parentTask', 'priority', 'startDate', 'endDate','edit', 'end'
];
  public dataSource = new MatTableDataSource<Task>();
  @ViewChild(MatSort) sort: MatSort;
  constructor(private taskService: TaskService, private router :Router, private projectService:ProjectService) { }

  ngOnInit() {
    this.getProjectNames();
   
  }
  ngAfterViewInit (){
    this.dataSource.sort = this.sort;
  }
  selectchange(args){
    var s = args.target.value; 
    var s1 = s.substring(s.indexOf(":")+1);
     s1.trim();
     localStorage.setItem("projectId", s1); 
     this.reloadData(s1);
  }
  public reloadData = (projId) => {
    this.taskService.viewTask(projId)
    .subscribe(res => {
      this.dataSource.data = res as Task[];
    })
  } 
 // reloadData(projId) {
  //  this.tasks = this.taskService.viewTask(projId);
  //}
  getProjectNames (){
    this.projects =this.projectService.viewProject();
   }

  editTask(tsk: Task): void {
  alert("In edit task");
 
   localStorage.setItem("editTaskId", tsk.taskId.toString()); 
    this.router.navigate(['editTask']);
  }

  endTask(tsk: Task) : void {

    this.taskService.endTask(tsk.taskId)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData(localStorage.getItem("projectId"));
      },
      error => console.log(error));

    this.router.navigate(['view']);

  }
}

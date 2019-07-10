import { Component, ViewChild, ElementRef, OnInit,AfterViewInit } from '@angular/core';
import { ProjectService } from './../project.service';
import { Project } from "./../Project";
import {Router} from "@angular/router";
import { MatTableDataSource,MatSort } from '@angular/material';
import { Observable } from "rxjs";
@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit,AfterViewInit {

  projects: Observable<Project[]>;
  public displayedColumns = ['projectName', 'startDate', 'endDate','priority','update', 'suspend'
];
  public dataSource = new MatTableDataSource<Project>();
  @ViewChild(MatSort) sort: MatSort;
  constructor(private projectService:ProjectService, private router:Router) { }

  ngOnInit() {
    this.getAllProjects();
  }

  public getAllProjects = () => {
    this.projectService.viewProject()
    .subscribe(res => {
      this.dataSource.data = res as Project[];
    })
  }  
  ngAfterViewInit (){
    this.dataSource.sort = this.sort;
  }

  public redirectToEdit = (id: string) => {
    

 localStorage.setItem("editProjectId", id);
    this.router.navigate(['editProject']);
  }

  deleteProject(project: Project) : void {
    
        this.projectService.deleteProject(project.projectId)
        .subscribe(
          data => {
            console.log(data);
            this.getAllProjects();
          },
          error => console.log(error));
          
          this.router.navigate(['viewProject']);
      }

}

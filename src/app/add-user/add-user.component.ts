import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from "./../User";
import { UserService } from "./../user.service";
import { Observable } from "rxjs";
import { NgModule } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  public displayedColumns = ['firstName', 'lastName', 'employeeId'
];
  public dataSource = new MatTableDataSource<User>();
 
  user: User = new User();
  users: Observable<User[]>;
  constructor(private userService: UserService,  private router :Router) { }
  ngOnInit() {
    
  }

  save() {
    
        this.userService.addUser(this.user)
     .subscribe(data => console.log(data), error => console.log(error));
     
   this.user = new User();
  }
   onSubmit() {
     
     this.save();
   }
 
   viewUser (){
    this.router.navigate(['viewUser']);
   }
  
  }
 


import {Component, ViewChild, ElementRef, OnInit,AfterViewInit} from "@angular/core";
import { User } from "./../User";
import { UserService } from './../user.service';
import { Observable } from "rxjs";
import {Router} from "@angular/router";
import { MatTableDataSource,MatSort } from '@angular/material';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit, AfterViewInit  {

  users: Observable<User[]>;
  public displayedColumns = ['firstName', 'lastName', 'employeeId','edit', 'delete'
];
  public dataSource = new MatTableDataSource<User>();
  @ViewChild(MatSort) sort: MatSort;
  constructor(private userService: UserService, private router :Router) { }

  ngOnInit() {
    this.getAllUsers();
  }
 
  ngAfterViewInit (){
    this.dataSource.sort = this.sort;
  }

  public getAllUsers = () => {
    this.userService.viewUser()
    .subscribe(res => {
      this.dataSource.data = res as User[];
    })
  }  
    public redirectToEdit = (id: string) => {
      

   localStorage.setItem("editUserId", id);
      this.router.navigate(['editUser']);
    }

    deleteUser(user: User) : void {
      
          this.userService.deleteUser(user.userId)
          .subscribe(
            data => {
              console.log(data);
              this.getAllUsers();
            },
            error => console.log(error));
            
            this.router.navigate(['viewUser']);
        }

       
}

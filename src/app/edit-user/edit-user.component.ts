import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { User } from "./../User";
import {UserService } from './../user.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  users: Observable<User[]>;
  editForm: FormGroup;
  constructor(private userService: UserService, private router :Router, 
    private formBuilder :FormBuilder) { }

  ngOnInit() {
    let userId = localStorage.getItem("editUserId");
    alert(userId);
    if(!userId) {
      alert("Invalid action.")
      this.router.navigate(['view-user']);
      return;
  } 
  this.editForm = this.formBuilder.group({
    userId:[],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    employeeId:['', Validators.required]
   
  });
  this.userService.getUserById(+userId)
    .subscribe( data => {
      this.editForm.setValue(data);
    });
  }

  onSubmit() {
    this.userService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['viewUser']);
        },
        error => {
          alert(error);
        });
  }
}

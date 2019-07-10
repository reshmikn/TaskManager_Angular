import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule, MatTableModule, MatSortModule, MatIconModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { AddProjectComponent} from './add-project/add-project.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ViewTaskComponent,
    EditTaskComponent,
    AddProjectComponent,
    AddUserComponent,
    ViewUserComponent,
    EditUserComponent,
    ViewProjectComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatDatepickerModule, MatInputModule, MatNativeDateModule,
    MatTableModule , MatSortModule, 
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,ReactiveFormsModule
  ],
  exports: [
    AddUserComponent,
    ViewUserComponent,
    MatSortModule, AddProjectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

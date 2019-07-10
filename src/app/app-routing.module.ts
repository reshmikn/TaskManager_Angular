import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddTaskComponent} from './add-task/add-task.component'
import {ViewTaskComponent} from './view-task/view-task.component'
import {EditTaskComponent} from './edit-task/edit-task.component'
import { AddProjectComponent} from './add-project/add-project.component'
import { AddUserComponent} from './add-user/add-user.component'
import { ViewUserComponent} from './view-user/view-user.component'
import { EditUserComponent} from './edit-user/edit-user.component'
import { ViewProjectComponent} from './view-project/view-project.component'
import { EditProjectComponent} from './edit-project/edit-project.component'
const routes: Routes = [
  { path: 'add', component:AddTaskComponent },
  { path: 'view', component:ViewTaskComponent },
  { path: 'editTask', component:EditTaskComponent },
  { path: 'updateTask', component:ViewTaskComponent },
  { path: 'addProject', component:AddProjectComponent},
  { path: 'addUser', component:AddUserComponent},
  { path: 'viewUser', component:ViewUserComponent},
  { path: 'editUser', component:EditUserComponent},
  { path: 'viewProject', component:ViewProjectComponent},
  { path: 'editProject', component:EditProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

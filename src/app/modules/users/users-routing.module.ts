import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './containers/users.container';
import {UserFormComponent} from '../../users/containers/user-form/user-form.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserFormComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

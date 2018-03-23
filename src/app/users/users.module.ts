import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './containers/users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListItemComponent } from './components/users-list-item/users-list-item.component';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [UsersComponent, UsersListComponent, UsersListItemComponent],
  providers: [UsersService]
})
export class UsersModule { }

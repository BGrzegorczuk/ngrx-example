import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './containers/users.container';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListItemComponent } from './components/users-list-item/users-list-item.component';
import { UsersService } from './services/users.service';

import {StoreModule} from '@ngrx/store';
import * as reducers from './store/reducers';
import {UsersEffects} from './store/effects';
import {EffectsModule} from '@ngrx/effects';
import {LoaderModule} from '../../shared/components/loader/loader.module';
import { UserFormComponent } from './containers/user-form/user-form.component';
import {FormsModule} from '../shared/components/forms/forms.module';


@NgModule({
  imports: [
    CommonModule,
    LoaderModule,
    FormsModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', reducers.usersReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  declarations: [UsersComponent, UsersListComponent, UsersListItemComponent, UserFormComponent],
  providers: [UsersService]
})
export class UsersModule { }

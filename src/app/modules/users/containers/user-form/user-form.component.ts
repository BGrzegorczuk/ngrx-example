import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IUser} from '../../models/user.model';
import {UsersService} from '../../services/users.service';
import * as fromUsersStore from '../../store';
import * as fromRootStore from '../../../../store';
import {Params} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  userData: IUser;

  constructor (
    private fb: FormBuilder,
    private userService: UsersService,
    private store: Store<fromUsersStore.IUsersState>
  ) { }

  // TODO: refactor getting userId from route params; add loader & handle createForm..
  ngOnInit() {
    this.store.select(fromRootStore.selectRouterParams).subscribe((params: Params) => {
      this.userService.getUser(params.id).subscribe(user => {
        this.userData = user;
        this.createForm(this.userData);
      });
    });
    this.userForm.valueChanges.subscribe(form => console.log('form changed', form));
  }

  createForm(userData: IUser) {
    this.userForm = this.fb.group({
      email: userData.email,
      gender: userData.gender
    });
  }

}

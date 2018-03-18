import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {IUser} from './models/user';
import {Observable} from 'rxjs/Observable';
import {getUsersSelector, IUsersState} from './users.reducer';
import {Store} from '@ngrx/store';
import * as userActions from './actions/users.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit, OnDestroy {

  users$: Observable<IUser[]>;
  private page = 1;
  private resultsPerPage = 5;

  constructor(private store: Store<IUsersState>) {
    this.users$ = this.store.select(getUsersSelector); // only initializing users variable as an Observable
  }

  ngOnInit() {
    this.getUsers(this.page, this.resultsPerPage);
    this.users$.subscribe(users => console.log('users', users));
  }

  getUsers(page, limit) {
    this.store.dispatch(new userActions.GetUsersRequest({ page, limit }));
  }

  ngOnDestroy() {}
}

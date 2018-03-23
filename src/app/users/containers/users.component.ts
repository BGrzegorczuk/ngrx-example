import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IUser} from '../models/user';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {IUsersState} from '../store/reducers';
import * as userSelectors from '../store/selectors/users.selectors';
import * as userActions from '../store/actions/users.actions';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  users$: Observable<IUser[]>;
  private page = 1;
  private resultsPerPage = 5;

  constructor(private store: Store<IUsersState>) {
    this.users$ = this.store.select(userSelectors.getUserList); // only initializing users variable as an Observable
  }

  ngOnInit() {
    this.getUsers(this.page, this.resultsPerPage);
    this.users$.subscribe(users => console.log('users', users));
  }

  getUsers(page, limit) {
    this.store.dispatch(new userActions.GetUsersRequest({ page, limit }));
  }
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {IUser} from '../models/user.model';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {IUsersState} from '../store/reducers';
import * as userSelectors from '../store/selectors/users.selectors';
import * as userActions from '../store/actions/users.actions';


@Component({
  selector: 'app-users',
  templateUrl: './users.container.html',
  styleUrls: ['./users.container.sass'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  // users$: Observable<IUser[]>;
  public users: IUser[];
  private page = 1;
  private resultsPerPage = 10;

  constructor(private store: Store<IUsersState>) {
    // this.users$ = this.store.select(userSelectors.selectAllUsers); // only initializing users variable as an Observable
  }

  ngOnInit() {
    this.getUsers(this.page, this.resultsPerPage);
    this.store.select(userSelectors.selectAllUsers).subscribe(users => {
      this.users = users;
      console.log('this.users', this.users);
    });
    // this.users$.subscribe(users => {
    //   this.users = users;
    //   console.log('this.users', this.users);
    // });
  }

  getUsers(page: number, limit: number) {
    this.store.dispatch(new userActions.GetUsersRequest({ page, limit }));
  }
}

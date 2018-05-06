import {Component, OnInit} from '@angular/core';
import {IUser} from '../models/user.model';
import {Store} from '@ngrx/store';
import {IUsersState} from '../store/reducers';
import * as userSelectors from '../store/selectors/users.selectors';
import * as userActions from '../store/actions/users.actions';


@Component({
  selector: 'app-users',
  templateUrl: './users.container.html',
  styleUrls: ['./users.container.sass']
})
export class UsersComponent implements OnInit {

  public users: IUser[];
  private page = 1;
  private resultsPerPage = 10;

  constructor(private store: Store<IUsersState>) {}

  ngOnInit() {
    this.getUsers(this.page, this.resultsPerPage);
    this.store.select(userSelectors.selectAllUsers).subscribe(users => {
      this.users = users;
    });
  }

  getUsers(page: number, limit: number) {
    this.store.dispatch(new userActions.GetUsersRequest({ page, limit }));
  }
}

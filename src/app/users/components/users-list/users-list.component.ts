import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {IUser} from '../../models/user.model';
import {Store} from '@ngrx/store';
import {IAppState} from '../../../store/reducers';
import * as RouterAction from '../../../store/actions';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {

  @Input() users: IUser[];

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {}

  onUserSelect(user: IUser, index: number) {
    console.log('onUserSelect', user);
    this.store.dispatch(new RouterAction.Go({ path: [ 'user', index ] }));
  }

}

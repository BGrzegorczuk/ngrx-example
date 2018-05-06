import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {IUser} from '../../models/user.model';
import {Store} from '@ngrx/store';
import * as fromStore from '../../../../store';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {

  @Input() users: IUser[];

  constructor(private store: Store<fromStore.IAppState>) { }

  ngOnInit() {}

  onUserSelect(user: IUser, index: number) {
    console.log('onUserSelect', user);
    this.store.dispatch(new fromStore.RouterGo({ path: [ 'user', index ] }));
  }

}

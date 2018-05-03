import {Component, OnInit, Input, ChangeDetectionStrategy, OnChanges} from '@angular/core';
import {IUser} from '../../models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit, OnChanges {

  @Input() users: IUser[];

  constructor() { }

  ngOnInit() {}

  ngOnChanges(x: any) {
    console.log('onChanges', x);
  }


}

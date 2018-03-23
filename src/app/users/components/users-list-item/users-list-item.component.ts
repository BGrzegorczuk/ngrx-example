import { Component, OnInit, Input } from '@angular/core';
import {IUser} from '../../models/user.model';

@Component({
  selector: '[app-users-list-item]',
  templateUrl: './users-list-item.component.html',
  styleUrls: ['./users-list-item.component.sass']
})
export class UsersListItemComponent implements OnInit {

  @Input() user: IUser;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}

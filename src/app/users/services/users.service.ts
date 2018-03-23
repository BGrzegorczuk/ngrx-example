import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {usersData} from '../../../db/users';


@Injectable()
export class UsersService {

  constructor() { }

  getUsers(page, limit) {
    const offset = (page - 1) * limit;
    const result = usersData.slice(offset, offset + limit);
    return Observable.of(result).delay(100);
  }

}

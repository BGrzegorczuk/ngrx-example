import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {GetUsersSuccess, UserActionTypes} from '../actions/users.actions';
import {UsersService} from '../users.service';


@Injectable()
export class UsersEffects {

  constructor(
    private usersService: UsersService,
    private actions$: Actions
  ) {}

  @Effect() getUsers$ = this.actions$
    .ofType(UserActionTypes.GET_USERS_REQUEST)
    .switchMap(action => this.usersService.getUsers(1, 5)
      .map(users => new GetUsersSuccess(users))
      // .catchError()
    );
}

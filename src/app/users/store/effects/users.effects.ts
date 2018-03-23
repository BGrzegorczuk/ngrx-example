import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {GetUsersSuccess, IGetUsersRequestPayload, UserActionTypes} from '../actions/users.actions';
import {UsersService} from '../../users.service';
import {IAction} from '../../../interfaces/ngrx';


@Injectable()
export class UsersEffects {

  constructor(
    private usersService: UsersService,
    private actions$: Actions
  ) {}

  @Effect() getUsers$ = this.actions$
    .ofType(UserActionTypes.GET_USERS_REQUEST)
    .switchMap((action: IAction<IGetUsersRequestPayload>) => this.usersService.getUsers(action.payload.page, action.payload.limit)
      .map(users => new GetUsersSuccess({
        list: users,
        total: users.length
      }))
      // .catchError()
    );
}

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as userActions from '../actions/users.actions';
import {UsersService} from '../../services/users.service';
import {IAction} from '../../../interfaces/ngrx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UsersEffects {

  constructor(
    private usersService: UsersService,
    private actions$: Actions
  ) {}

  // @Effect() navigateToUsers$ = this.actions.ofType(ROUTER_NAVIGATION)

  @Effect() getUsers$ = this.actions$
    .ofType(userActions.UserActionTypes.GET_USERS_REQUEST)
    .switchMap((action: IAction<userActions.IGetUsersRequestPayload>) => {

      return this.usersService.getUsers(action.payload.page, action.payload.limit)
        .map(users => new userActions.GetUsersSuccess({
          list: users,
          total: users.length
        }))
        .catch((err) => {
          console.error('Error from UsersEffect:', err);
          return Observable.of({});
        })
    });




}

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as userActions from '../actions/users.actions';
import {UsersService} from '../../services/users.service';
import {Observable} from 'rxjs/Observable';
import {ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store';
import {ActivatedRouteSnapshot} from '@angular/router';
import {IAppState} from '../../../store/reducers';
import {Store} from '@ngrx/store';
import {IUsersState} from '../reducers';
import {IAction} from '../../../interfaces/ngrx';


function firstSegment(r: RouterNavigationAction) {
  console.log('r', r);
  return r.payload.routerState.root.firstChild;
}



@Injectable()
export class UsersEffects {

  constructor(
    // private store: Store<IUsersState>,
    private usersService: UsersService,
    private actions$: Actions
  ) {}

  @Effect()
  loadUsers$ = this.actions$
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

  // @Effect() navToUsers$ = this.handleNavigation('/users', (r: ActivatedRouteSnapshot) => {
  //   console.log('navToUsers', r);
  //   return Observable.of({});
  //   // const filters = createFilters(r.params);
  //   // return this.backend.findTalks(filters).map(resp => ({type: 'TALKS_UPDATED', payload: {...resp, filters}}));
  // });

  // private handleNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: IAppState) => Observable<any>) {
  //   const nav = this.actions$.ofType(ROUTER_NAVIGATION).
  //   map(firstSegment).
  //   filter(s => s.routeConfig.path === segment);
  //
  //   return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
  //     console.log('Network error', e);
  //     return Observable.of();
  //   });
  // }
}

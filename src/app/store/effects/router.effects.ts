import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import * as routerActions from '../actions/router.actions';


@Injectable()
export class RouterEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$
    .ofType(routerActions.RouterActionTypes.ROUTER_GO)
    .map((action: routerActions.Go) => action.payload)
    .do(({ path, query: queryParams, extras}) => this.router.navigate(path, { queryParams, ...extras }));

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$
    .ofType(routerActions.RouterActionTypes.ROUTER_BACK)
    .do(() => this.location.back);

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$
    .ofType(routerActions.RouterActionTypes.ROUTER_FORWARD)
    .do(() => this.location.forward());
}

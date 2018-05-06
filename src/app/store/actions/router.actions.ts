import {IAction} from '../../shared/interfaces/ngrx';
import {NavigationExtras} from '@angular/router';


// ROUTER ACTIONS
export enum RouterActionTypes {
  ROUTER_GO = 'router/ROUTER_GO',
  ROUTER_BACK = 'router/ROUTER_BACK',
  ROUTER_FORWARD = 'router/ROUTER_FORWARD',
}


export interface IRouterGoPayload {
  path: any[];
  query?: object;
  extras?: NavigationExtras;
}

export class RouterGo implements IAction<IRouterGoPayload> {
  readonly type = RouterActionTypes.ROUTER_GO;
  constructor(public payload: IRouterGoPayload) {}
}

export class RouterBack implements IAction {
  readonly type = RouterActionTypes.ROUTER_BACK;
}

export class RouterForward implements IAction {
  readonly type = RouterActionTypes.ROUTER_FORWARD;
}

export type RouterActions
  = RouterGo | RouterBack | RouterForward;

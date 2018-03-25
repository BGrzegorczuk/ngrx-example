import {IAction} from '../../interfaces/ngrx';
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

export class Go implements IAction<IRouterGoPayload> {
  readonly type = RouterActionTypes.ROUTER_GO;
  constructor(public payload: IRouterGoPayload) {}
}

export class Back implements IAction<null> {
  readonly type = RouterActionTypes.ROUTER_BACK;
}

export class Forward implements IAction<null> {
  readonly type = RouterActionTypes.ROUTER_FORWARD;
}

export type RouterActions
  = Go | Back | Forward;

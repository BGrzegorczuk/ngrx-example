// counter.actions.ts
import { Action } from '@ngrx/store';
import {IUser} from '../models/user';

export enum UserActionTypes {
  GET_USERS_REQUEST = 'users/GET_USERS_REQUEST',
  GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS',
  GET_USERS_FAILURE = 'users/GET_USERS_FAILURE',
}

export interface IGetUsersRequestPayload {
  page: number;
  limit: number;
}

export class GetUsersRequest implements Action {
  readonly type = UserActionTypes.GET_USERS_REQUEST;
  constructor(public payload: IGetUsersRequestPayload) {}
}

export class GetUsersSuccess implements Action {
  readonly type = UserActionTypes.GET_USERS_SUCCESS;
  constructor(public payload: IUser[]) {}
}

export class GetUsersFailure implements Action {
  readonly type = UserActionTypes.GET_USERS_FAILURE;

  constructor(public payload: number) {}
}

export type UserActions
  = GetUsersRequest | GetUsersSuccess | GetUsersFailure;

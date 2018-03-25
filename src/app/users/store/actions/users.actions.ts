import {IUser} from '../../models/user.model';
import {IAction} from '../../../interfaces/ngrx';

// USER ACTIONS
export enum UserActionTypes {
  GET_USERS_REQUEST = 'users/GET_USERS_REQUEST',
  GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS',
  GET_USERS_FAILURE = 'users/GET_USERS_FAILURE',
}


export interface IGetUsersRequestPayload {
  page: number;
  limit: number;
}

export class GetUsersRequest implements IAction<IGetUsersRequestPayload> {
  readonly type = UserActionTypes.GET_USERS_REQUEST;
  constructor(public payload: IGetUsersRequestPayload) {}
}

export interface IGetUsersSuccessPayload {
  list: IUser[];
  total: number;
}

export class GetUsersSuccess implements IAction<IGetUsersSuccessPayload> {
  readonly type = UserActionTypes.GET_USERS_SUCCESS;
  constructor(public payload: IGetUsersSuccessPayload) {}
}

export interface IGetUsersFailurePayload {}

export class GetUsersFailure implements IAction<IGetUsersFailurePayload> {
  readonly type = UserActionTypes.GET_USERS_FAILURE;

  constructor(public payload: number) {}
}

export type UserActions
  = GetUsersRequest | GetUsersSuccess | GetUsersFailure;

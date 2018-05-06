import {IUser} from '../../models/user.model';
import {IAction} from '../../../../shared/interfaces/ngrx';


// USER ACTIONS
export enum UserActionTypes {
  GET_USERS_REQUEST = 'users/GET_USERS_REQUEST',
  GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS',
  GET_USERS_FAILURE = 'users/GET_USERS_FAILURE',

  GET_USER_REQUEST = 'users/GET_USER_REQUEST',
  GET_USER_SUCCESS = 'users/GET_USER_SUCCESS',
  GET_USER_FAILURE = 'users/GET_USER_FAILURE',
}


/* GET USER LIST */
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


/* GER SINGLE USER */
export class GetUserRequest implements IAction<number|string> {
  readonly type = UserActionTypes.GET_USER_REQUEST;
  constructor(public payload: number|string) {}
}

export class GetUserSuccess implements IAction<IUser> {
  readonly type = UserActionTypes.GET_USER_SUCCESS;
  constructor(public payload: IUser) {}
}

export interface IGetUserFailurePayload {}

export class GetUserFailure implements IAction<IGetUserFailurePayload>{
  readonly type = UserActionTypes.GET_USER_FAILURE;
  constructor(public payload: IGetUserFailurePayload) {}
}



export type UserActions
  = GetUsersRequest | GetUsersSuccess | GetUsersFailure |
    GetUserRequest | GetUserSuccess | GetUserFailure;

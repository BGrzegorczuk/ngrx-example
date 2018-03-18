import {IUser} from './models/user';
import {UserActions, UserActionTypes} from './actions/users.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export interface IUsersState {
  users: IUser[];
  total: number;
  page: number;
}

export const initialState: IUsersState = {
  users: [],
  total: 0,
  page: 1
};


export function usersReducer(state: IUsersState = initialState, action: UserActions) {
  switch (action.type) {
    case UserActionTypes.GET_USERS_SUCCESS:
      return { ...state, users: action.payload };
    // case UserActionTypes.GET_USERS_FAILURE:
    //   return { ...state, users: action.payload };
    default:
      return state;
  }
}

export const getUsersState = createFeatureSelector<IUsersState>('usersState');

export const getUsersSelector = createSelector(
  getUsersState,
  (state: IUsersState) => state.users
);

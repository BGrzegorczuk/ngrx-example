import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IUsersState} from '../reducers';

export const getUsersState = createFeatureSelector<IUsersState>('users');

export const getUserList = createSelector(
  getUsersState,
  (state: IUsersState) => state.list
);

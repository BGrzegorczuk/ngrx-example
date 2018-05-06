import {createFeatureSelector} from '@ngrx/store';
import * as fromUsers from '../';

export const selectUsersState = createFeatureSelector<fromUsers.IUsersState>('users');

export const {
  // select the array of user ids
  selectIds: selectUserIds,
  // select the dictionary of user entities
  selectEntities: selectUserEntities,
  // select the array of users
  selectAll: selectAllUsers,
  // select the total user count
  selectTotal: selectUserTotal,
} = fromUsers.usersAdapter.getSelectors(selectUsersState);

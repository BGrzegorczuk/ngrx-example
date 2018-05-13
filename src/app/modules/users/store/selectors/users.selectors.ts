import {createFeatureSelector} from '@ngrx/store';
import {IUsersState, usersAdapter} from '../reducers';

export const selectUsersState = createFeatureSelector<IUsersState>('users');

export const {
  // select the array of user ids
  selectIds: selectUserIds,
  // select the dictionary of user entities
  selectEntities: selectUserEntities,
  // select the array of users
  selectAll: selectAllUsers,
  // select the total user count
  selectTotal: selectUserTotal,
} = usersAdapter.getSelectors(selectUsersState);

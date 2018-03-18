import {IUsersState, usersReducer} from './users/users.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface IAppState {
  usersState: IUsersState;
}

export const reducers: ActionReducerMap<IAppState> = {
  usersState: usersReducer
};

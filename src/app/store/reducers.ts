import {IUsersState, usersReducer} from '../users/store/reducers/users.reducer';
import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';

export interface IAppState {}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<any>[] = [debug];

export const reducers: ActionReducerMap<IAppState> = {};

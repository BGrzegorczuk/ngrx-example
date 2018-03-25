import {ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {routerReducer} from '@ngrx/router-store';

// TODO: dlaczego to jest puste????
export interface IAppState {
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('[DEBUG]: state', state);
    console.log('[DEBUG]: action', action);
    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<any>[] = [debug];

export const reducers: ActionReducerMap<IAppState> = {
  router: routerReducer
};

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IRouterState} from '../reducers/router.reducer';


export const selectRouterState = createFeatureSelector<IRouterState>('router');
export const selectRouterUrl = createSelector(
  selectRouterState,
  (state: IRouterState) => state.state.url
);

export const selectRouterParams = createSelector(
  selectRouterState,
  (state: IRouterState) => state.state.params
);

export const selectRouterQueryParams = createSelector(
  selectRouterState,
  (state: IRouterState) => state.state.queryParams
);

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IRouterStateUrl} from '../reducers/router.reducer';
import {Params} from '@angular/router';

export const getRouterState = createFeatureSelector<IRouterStateUrl>('router');
export const getRouterUrl = createSelector(
  getRouterState,
  (state: IRouterStateUrl) => state.url
);

export const getRouterParams = createSelector(
  getRouterState,
  (state: IRouterStateUrl) => state.params
);

export const getRouterQueryParams = createSelector(
  getRouterState,
  (state: IRouterStateUrl) => state.queryParams
);

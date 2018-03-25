import {createFeatureSelector} from '@ngrx/store';
import {IRouterStateUrl} from '../reducers/router.reducer';

export const getRouterState = createFeatureSelector<IRouterStateUrl>('router');

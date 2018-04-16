import {Action} from '@ngrx/store';

export interface IAction<T=null> extends Action { payload?: T | null }

import {IUser} from '../../models/user.model';
import {UserActions, UserActionTypes} from '../actions/users.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';


export interface IUsersState extends EntityState<IUser>{
  total: number;
  page: number;
}

export const usersAdapter = createEntityAdapter<IUser>();


export const initialState: IUsersState = usersAdapter.getInitialState({
  total: 0,
  page: 1
});

export function usersReducer(state: IUsersState = initialState, action: UserActions) {
  switch (action.type) {
    case UserActionTypes.GET_USERS_SUCCESS:
      const { list, total } = action.payload;
      return usersAdapter.addAll(list, {...state, total});
    // case UserActionTypes.GET_USERS_FAILURE:
    //   return { ...state, list: action.payload };
    default:
      return state;
  }
}

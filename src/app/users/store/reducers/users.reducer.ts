import {IUser} from '../../models/user.model';
import {UserActions, UserActionTypes} from '../actions/users.actions';


export interface IUsersState {
  list: IUser[];
  total: number;
  page: number;
}

export const initialState: IUsersState = {
  list: [],
  total: 0,
  page: 1
};


export function usersReducer(state: IUsersState = initialState, action: UserActions) {
  switch (action.type) {
    case UserActionTypes.GET_USERS_SUCCESS:
      const { list, total } = action.payload;
      return { ...state, list, total };
    // case UserActionTypes.GET_USERS_FAILURE:
    //   return { ...state, list: action.payload };
    default:
      return state;
  }
}

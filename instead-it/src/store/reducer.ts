import * as Actions from './actions';
import { User } from '../User/user';

export interface UserState {
  user: User;
}

export interface AppState extends UserState {}

const initialState: AppState = {
  user: new User(),
};

export const reducer = (
  state: AppState = initialState,
  action: Actions.AppAction
): AppState => {
  const newState = { ...state };

  switch (action.type) {
    case Actions.UserActions.GetUser:
      newState.user = action.payload as User;
      return newState;
    default:
      return state;
  }
};

export default reducer;

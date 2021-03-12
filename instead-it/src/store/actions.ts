import { User } from '../User/user';

export enum UserActions {
  GetUser = 'GET_USER',
  LoginChange = 'CHANGE_LOGIN',
  ChangeUser = 'CHANGE_USER',
  UserActions = 'UserActions',
}

export interface AppAction {
  type: string;
  payload: any;
}

export interface UserAction extends AppAction {
  type: UserActions;
  payload: User;
}

export function getUser(user: User): UserAction {
  const action: UserAction = {
    type: UserActions.GetUser,
    payload: user,
  };
  return action;
}

export function changeLogin(user: User): UserAction {
  const action: UserAction = {
    type: UserActions.LoginChange,
    payload: new User(),
  };
  return action;
}

export function changeUser(user: User): UserAction {
  const action: UserAction = {
    type: UserActions.ChangeUser,
    payload: user,
  };
  return action;
}

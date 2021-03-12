import { Comment, Thread } from '../Thread/thread';
import { User } from '../User/user';

export enum UserActions {
  GetUser = 'GET_USER',
  LoginChange = 'CHANGE_LOGIN',
  ChangeUser = 'CHANGE_USER',
}

export enum ThreadActions {
  GetThreads = 'GET_THREADS',
  GetThread = 'GET_THREAD',
  ChangeThread = 'CHANGE_THREAD',
  GetComments = 'GET_COMMENTS',
}

export interface AppAction {
  type: string;
  payload: any;
}

export interface UserAction extends AppAction {
  type: UserActions;
  payload: User;
}

export interface ThreadAction extends AppAction {
  type: ThreadActions;
  payload: Thread[] | Thread | Comment[];
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

export function getThreads(threads: Thread[]): ThreadAction {
  return { type: ThreadActions.GetThreads, payload: threads };
}

export function getThread(thread: Thread): ThreadAction {
  return { type: ThreadActions.GetThread, payload: thread };
}

export function changeThread(thread: Thread): ThreadAction {
  return { type: ThreadActions.ChangeThread, payload: thread };
}

export function getComments(comments: Comment[]): ThreadAction {
  return { type: ThreadActions.GetComments, payload: comments };
}

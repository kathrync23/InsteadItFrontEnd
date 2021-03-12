import * as Actions from './actions';
import { User } from '../User/user';
import { Comment, Thread } from '../Thread/thread';

export interface UserState {
  user: User;
}

export interface ThreadState {
  threads: Thread[];
  thread: Thread;
  comments: Comment[];
}

export interface AppState extends UserState, ThreadState {}

const initialState: AppState = {
  user: new User(),
  threads: [],
  thread: new Thread(),
  comments: [],
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
    case Actions.ThreadActions.GetThreads:
      newState.threads = action.payload as Thread[];
      return newState;
    case Actions.ThreadActions.GetComments:
      newState.comments = action.payload as Comment[];
      return newState;
    default:
      return state;
  }
};

export default reducer;

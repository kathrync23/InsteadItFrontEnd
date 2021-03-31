import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { changeThread } from '../store/actions';
import { ThreadState } from '../store/reducer';
import { Thread } from './thread';

type PropType = { thread: Thread };
export function ThreadDetail(props: PropType) {
  let thread = useSelector((state: ThreadState) => state.thread);
  const dispatch = useDispatch();
  const history = useHistory();

  function changeStoreThread() {
    dispatch(changeThread(props.thread));
    console.log(thread);
    history.push('/threads/' + thread.title);
  }

  return (
    <div className='thread-detail'>
      <h3>{props.thread.title}</h3>
      <p>{props.thread.content}</p>
      <Link to={`/threads/${props.thread.title}`} onClick={changeStoreThread}>
        View Thread
      </Link>
    </div>
  );
}

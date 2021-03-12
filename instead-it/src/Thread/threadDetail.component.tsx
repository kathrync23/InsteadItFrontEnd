import React from 'react';
import { Link } from 'react-router-dom';
import { Thread } from './thread';

type PropType = { thread: Thread };
export function ThreadDetail(props: PropType) {
  return (
    <div className='thread-detail'>
      <h3>{props.thread.title}</h3>
      <p>{props.thread.content}</p>
      <Link to={`/threads/${props.thread.title.substr(0, 5)}`}>
        View Thread
      </Link>
    </div>
  );
}

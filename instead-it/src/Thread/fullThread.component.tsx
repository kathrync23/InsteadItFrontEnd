import React from 'react';
import { useSelector } from 'react-redux';
import { ThreadState } from '../store/reducer';
import { Thread } from './thread';

export function FullThreadComponent() {
  const thread = useSelector((state: ThreadState) => state.thread);

  return (
    <div className='full-thread'>
      <p>{thread.content}</p>
    </div>
  );
}

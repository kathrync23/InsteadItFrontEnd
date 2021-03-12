import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThreadState } from '../store/reducer';
import { Thread } from './thread';
import { ThreadDetail } from './threadDetail.component';

let thread1 = new Thread();
let thread2 = new Thread();
let thread3 = new Thread();
let thread4 = new Thread();
let threadsEx = [thread1, thread2, thread3, thread4];

export function ThreadList() {
  const threads = useSelector((state: ThreadState) => state.threads);

  for (let i = 0; i < 4; i++) {
    threadsEx[i].title = 'Thread Title ' + i;
    threadsEx[i].content = 'Thread Content ' + i;
  }

  return (
    <div className='thread-table'>
      {threadsEx.map((value) => {
        return <ThreadDetail key={value.title} thread={value}></ThreadDetail>;
      })}
    </div>
  );
}

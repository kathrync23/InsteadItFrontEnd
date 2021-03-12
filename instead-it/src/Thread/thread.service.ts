import axios from 'axios';
import { Comment, Thread } from './thread';

class ThreadService {
  private URI: string;
  constructor() {
    this.URI = 'SOME_URI' + '/threads';
  }

  getThreads(): Promise<Thread[]> {
    return axios.get(this.URI).then((result) => result.data);
  }

  createThread(thread: Thread): Promise<null> {
    return axios.post(this.URI, thread).then((result) => null);
  }

  deleteThread(id: number): Promise<null> {
    return axios.delete(`${this.URI}/${id}`).then((result) => null);
  }

  getComments(): Promise<Comment[]> {
    return axios.get(this.URI).then((result) => result.data);
  }
}

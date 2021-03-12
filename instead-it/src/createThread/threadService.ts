import axios from 'axios';
import { Thread } from './thread';

class ThreadService {
    private URI: string;
    constructor() {
        this.URI = process.env.REACT_APP_SERVER_URI+'threads';
    }
    async addThread(thread: Thread): Promise<null> {
        const result = await axios.post(this.URI, thread);
        return null;
    }
}

export default new ThreadService();
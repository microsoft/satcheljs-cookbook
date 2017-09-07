import {mutator, action} from 'satcheljs';
import getStore from '../store/store';

let count = action('count', (n: number = 1) => ({n}));

mutator(count, (msg) => {
    getStore().counter += msg.n;
});

export default count;
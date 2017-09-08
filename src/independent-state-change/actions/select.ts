import {mutator, action} from 'satcheljs';
import getStore from '../store/store';

let select = action('count', (name: string) => ({ name }));

mutator(select, (msg) => {
    getStore().selected = msg.name;
});

export default select;
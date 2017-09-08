import {mutator, action} from 'satcheljs';
import getStore from '../store/store';

let toggleButton = action('toggleButton');

mutator(toggleButton, () => {
    getStore().flag = !getStore().flag;
});

export default toggleButton;
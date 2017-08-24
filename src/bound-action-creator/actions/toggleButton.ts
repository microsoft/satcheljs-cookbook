import {mutator, boundActionCreator} from 'satcheljs';
import getStore from '../store/store';

let toggleButton = boundActionCreator('toggleButton');

mutator(toggleButton, () => {
    getStore().flag = !getStore().flag;
});

export default toggleButton;
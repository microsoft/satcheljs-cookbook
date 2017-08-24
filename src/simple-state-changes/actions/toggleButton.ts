import {mutator, actionCreator} from 'satcheljs';
import getStore from '../store/store';

let toggleButton = actionCreator('toggleButton');

mutator(toggleButton, () => {
    getStore().flag = !getStore().flag;
});

export default toggleButton;
import {mutator, actionCreator} from 'satcheljs';

let toggleButton = actionCreator('toggleButton');

export default toggleButton;

mutator(toggleButton, () => {

});
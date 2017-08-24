import {createStore} from 'satcheljs';
import ExampleStore from './ExampleStore';

export default createStore<ExampleStore>('ExampleStore', {
    flag: false,
});
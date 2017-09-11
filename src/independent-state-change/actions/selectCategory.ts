import {mutator, action} from 'satcheljs';
import getStore from '../store/store';

let selectCategory = action('selectCategory', (id: number) => ({id}));

mutator(selectCategory, (msg) => {
    getStore().selectedCategoryId = msg.id;
});

export default selectCategory;
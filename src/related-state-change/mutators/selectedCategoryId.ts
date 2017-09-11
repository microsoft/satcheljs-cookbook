import {mutator} from 'satcheljs';
import selectCategory from '../actions/selectCategory';
import getStore from '../store/store';

mutator(selectCategory, (msg) => {
    getStore().selectedCategoryId = msg.id;
});

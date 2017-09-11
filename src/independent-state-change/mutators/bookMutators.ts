import {mutator, action} from 'satcheljs';
import selectCategory from '../actions/selectCategory';
import selectBook from '../actions/selectBook';
import getStore from '../store/store';

mutator(selectBook, (msg) => {
    getStore().selectedBookId = msg.id;
});

mutator(selectCategory, (msg) => {
    const store = getStore();

    let found: number | null = null;

    store.books.forEach(book => {
        if (book.categoryId == msg.id && !found) {
            found = book.id;
        }
    });

    store.selectedBookId = found;
});
